
/*const db = require("../models");

async function addProduct(userId, productId, amount) {
    if (!userId || !productId || !amount) {
        return { status: 422, data: "userId, productId och amount är obligatoriska."};
    }
   try {
    const [cart] = await db.Cart.findOrCreate({
        where: { UserId: userId, isCompleted: false }
    });

    const existingRow = await db.CartRow.findOne({
     where: { cartId: cart.id, productId: productId }   
    });

    if (existingRow) {
        existingRow.amount += amount;
        await existingRow.save();
        return { status: 200, data: existingRow};
    } else {
      const  newRow = await db.CartRow.create({
        cartId: cart.id,
         productId: productId,
         amount: amount
         

    });
    return { status:201, data: newRow};
    };
        
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

 module.exports = { addProduct }; **/



   
   
 const db = require("../models");
//hämta kundvagn---
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
//lägg till produkt
/*async function addProduct(userId, productId, amount) {
    if (!userId || !productId || !amount) {
        return { status: 422, data: "userId, productId och amount är obligatoriska."};
    }
   try {
    const [cart] = await db.Cart.findOrCreate({
        where: { UserId: userId, isCompleted: false }
    });

    const existingRow = await db.CartRow.findOne({
     where: { cartId: cart.id, productId: productId }
    });

    if (existingRow) {
        existingRow.amount += amount;
        await existingRow.save();
        return { status: 200, data: existingRow};
    } else {
      const  newRow = await db.CartRow.create({
        cartId: cart.id,
         productId: productId,
         amount: amount


    });
    return { status:201, data: newRow};
    };

   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}*/
async function addProduct(userId, productId, amount) {
    if (!userId || !productId || !amount) {
        return { status: 422, data: "userId, productId och amount är obligatoriska."};
    }
   try {
    const [cart] = await db.Cart.findOrCreate({
        where: { UserId: userId, isCompleted: false }
    });

    const existingRow = await db.CartRow.findOne({
     where: { cartId: cart.id, productId: productId }
    });

    if (existingRow) {
        existingRow.amount += amount;
        await existingRow.save();
        return { status: 200, data: existingRow};
    } else {
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
//ta bort produkt---
async function removeFromCart(userId, productId) {
  try {
    const cart = await db.Cart.findOne({
      where: { UserId: userId, isCompleted: false } // payed
    });

    if (!cart) {
      return { status: 404, data: "Cart hittades inte" };
    }

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


