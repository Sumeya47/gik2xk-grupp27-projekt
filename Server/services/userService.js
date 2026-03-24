const db = require("../models");

//Hämta alla användare
async function getAll() {
   try {
    const allUsers = await db.User.findAll();
    return { status: 200, data: allUsers };
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

// Hämta en specifik användare
async function getById(id) {
   try {
    const user = await db.User.findOne({
     where: { id }
      });
     if (!user) return { status: 404, data: { error: "användare hittades inte"}};
      return { status: 200, data: user };
    } catch (error) {
      return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

// Hämta en användares aktiva varukorg med produkter
async function getCart(id) {
   try {
    const cart = await db.Cart.findOne({
     where: { UserId: id, isCompleted: false},
     include: [{
        model: db.Product,
        through: { attributes: ["amount"] }
     }]
   });
     if (!cart) return { status: 200, data: [] };

     
     //Formatera varukorgen med pris och antal
     const cartItems = cart.Products.map((p) => ({
        id: p.id,
        title: p.title,
        price: p.price,
        imageUrl: p.imageUrl,
        amount: p.CartRow.amount,
        totalPrice: p.price * p.CartRow.amount
     }));
     return { status: 200, data: cartItems };
    } catch (error) {
      return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

// Skapa en ny användare
async function create(user) {
   try {
    const newUser = await db.User.create(user);
    return { status: 201, data: newUser };
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

// Updatera en användare
async function update(user, id) {
    if ( !id) return { status: 422, data: "Id är obligatoriskt" };
   try {
    await db.User.update(user, { where: { id }});
    return { status: 200, data: "Användaren uppdaterades." };
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

 // Ta bort en användare
async function destroy(id) {
    if ( !id) return { status: 422, data: "Id är obligatoriskt" };
   try {
    await db.User.destroy({ where: { id }});
    return { status: 200, data: "Användaren raderades." };
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

module.exports = { getAll, getById, getCart, create, update, destroy};




