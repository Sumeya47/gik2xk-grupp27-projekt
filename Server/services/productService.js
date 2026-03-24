const db = require("../models");

//Hämta alla produkter inklusive deras betyg

async function getAll() {
  try {
    const allProducts = await db.Product.findAll({
      include: [{ model: db.Rating }]
    });
    return { status: 200, data: allProducts };
  } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
  }
}


//Hämta en specifik produkt med betyg och snittbetyg
async function getById(id) {
   try {
    const product = await db.Product.findOne({
     where: { id },
        include: [{ model: db.Rating}]
      });
     if (!product) return { status: 404, data: { error: "Produkt hittades inte"}};

     // Räkna ut snittbetyget från alla betyg
        const ratings = product.Ratings.map((r) => r.value);
        const avgRating = ratings.length
        ? ratings.reduce((a, b) => a + b, 0) / ratings.length
        : null;
      return { status: 200, data: { ...product.toJSON(), avgRating } };
    } catch (error) {
      return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}
//Skapa en ny produkt
async function create(product) {
   try {
    const newProduct = await db.Product.create(product);
    return { status: 201, data: newProduct };
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

//Uppdatera en produkt
async function update(product, id) {
    if ( !id) return { status: 422, data: "Id är obligatoriskt" };
   try {
    await db.Product.update(product, { where: { id }});
    return { status: 200, data: "Produkten uppdaterades." };
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

//Ta bort en produkt
async function destroy(id) {
    if ( !id) return { status: 422, data: "Id är obligatoriskt" };
   try {
    await db.Product.destroy({ where: { id }});
    return { status: 200, data: "Produkten raderades." };
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

//Lägg till ett rating/betyg på en produkt
async function addRating(productId, value) {
   if (!productId || !value) {
    return {
      status: 422,
      data: "productId, userId och rating krävs"
    };
   }
  try {
    const ratingNumber = await db.Rating.create({
      ProductId : productId,
      value
    });

    return { status: 200, data: ratingNumber };
  } catch (error) {
    return {
      status: 500,
      data: { error: error.message }
    };
  }
}






module.exports = { getAll, getById, create, update, destroy, addRating};
