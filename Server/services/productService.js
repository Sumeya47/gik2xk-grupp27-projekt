/*const db = require("../models");

async function getAll() {
   try {
    const allProducts = await db.Product.findAll();
    return { status: 200, data: allProducts };
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}


async function getById(id) {
   try {
    const product = await db.Product.findOne({
     where: { id },
        include: [{ model: db.Rating}]
      });
     if (!product) return { status: 404, data: { error: "Produkt hittades inte"}};
        const ratings = product.Ratings.map((r) => r.value);
        const avgRating = ratings.length
        ? ratings.reduce((a, b) => a + b, 0) / ratings.length
        : null;
      return { status: 200, data: { ...product.toJSON(), avgRating } };
    } catch (error) {
      return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}


async function create(product) {
   try {
    const newProduct = await db.Product.create(product);
    return { status: 201, data: newProduct };
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}


async function update(product, id) {
    if ( !id) return { status: 422, data: "Id är obligatoriskt" };
   try {
    await db.Product.update(product, { where: { id }});
    return { status: 200, data: "Produkten uppdaterades." };
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

async function destroy(id) {
    if ( !id) return { status: 422, data: "Id är obligatoriskt" };
   try {
    await db.Product.destroy({ where: { id }});
    return { status: 200, data: "Produkten raderades." };
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

module.exports = { getAll, getById, create, update, destroy};**/



const db = require("../models");

//Hämta alla produkter
/* async function getAll() {
   try {
    const allProducts = await db.Product.findAll();
    return { status: 200, data: allProducts };
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
} */

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


//Hämta en produkt
async function getById(id) {
   try {
    const product = await db.Product.findOne({
     where: { id },
        include: [{ model: db.Rating}]
      });
     if (!product) return { status: 404, data: { error: "Produkt hittades inte"}};
        const ratings = product.Ratings.map((r) => r.value);
        const avgRating = ratings.length
        ? ratings.reduce((a, b) => a + b, 0) / ratings.length
        : null;
      return { status: 200, data: { ...product.toJSON(), avgRating } };
    } catch (error) {
      return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}
//Skapa produkt
async function create(product) {
   try {
    const newProduct = await db.Product.create(product);
    return { status: 201, data: newProduct };
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

//Uppdatera produkt
async function update(product, id) {
    if ( !id) return { status: 422, data: "Id är obligatoriskt" };
   try {
    await db.Product.update(product, { where: { id }});
    return { status: 200, data: "Produkten uppdaterades." };
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

//Ta bort produkt
async function destroy(id) {
    if ( !id) return { status: 422, data: "Id är obligatoriskt" };
   try {
    await db.Product.destroy({ where: { id }});
    return { status: 200, data: "Produkten raderades." };
   } catch (error) {
    return { status: error.status || 500, data: { error: error.message || "Okänt fel" } };
   }
}

//Lägg till rating---
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
