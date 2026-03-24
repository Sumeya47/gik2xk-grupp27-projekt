const db = require("../models");

// Hämta en användares aktiva varukorg med alla produkter
async function getCart(userId) {
  if (!userId) {
    return { status: 422, data: "userId krävs" };
  }

  try {
    const cart = await db.Cart.findOne({
      where: { UserId: userId, isCompleted: false }, //payed
      include: [
        {
          model: db.Product,
          through: [db.CartRow]
        }
      ]
    });

    return { status: 200, data: cart };
  } catch (error) {
    return {
      status: 500,
      data: { error: error.message }
    };
  }
}

// Lägg till en produkt i varukorgen
async function addProduct(userId, productId, amount) {
    if (!userId || !productId || !amount) {
        return { status: 422, data: "userId, productId och amount är obligatoriska."};
    }
   try {

    // Hitta eller skapa en aktiv varukorg för användaren
    const [cart] = await db.Cart.findOrCreate({
        where: { UserId: userId, isCompleted: false }
    });

     
     // Kolla om produkten redan finns i varukorgen
    const existingRow = await db.CartRow.findOne({
     where: { cartId: cart.id, productId: productId }
    });

    if (existingRow) {

      // Om produkten redan finns, uppdatera antalet
        existingRow.amount += amount;
        await existingRow.save();
        return { status: 200, data: existingRow};
    } else {
       
       // Om produkten inte finns, skapa en ny rad i varukorgen
      const newRow = await db.CartRow.create({
        cartId: cart.id,
        productId: productId,
        amount: amount
      });
      return { status: 201, data: newRow };
    }
   } catch (error) {
    console.log("Cart error:", error.message);
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

// Ta bort produkten från varukorgen
async function removeFromCart(userId, productId) {
  try {
  
    // Hitta användarens aktiva varukorg
    const cart = await db.Cart.findOne({
      where: { UserId: userId, isCompleted: false } // payed
    });

    if (!cart) {
      return { status: 404, data: "Cart hittades inte" };
    }
 
 // Ta bort produkten från varukorgen
    await db.CartRow.destroy({
      where: {
        cartId: cart.id,
        productId: productId
      }
    });

    return { status: 200, data: "Produkt borttagen" };
  } catch (error) {
    return {
      status: 500,
      data: { error: error.message }
    };
  }
}

 module.exports = { addProduct, getCart, removeFromCart };


