import axios from "./api";

// Hämta alla produkter
export async function getAll() {
  try {
    const response = await axios.get("/products");
    return response.data || [];
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
    return [];
  }
}

// Hämta en produkt
export async function getOne(id) {
  try {
    const response = await axios.get(`/products/${id}`);
    return response.data || null;
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
    return null;
  }
}

// Skapa produkt
export async function create(product) {
  try {
    const response = await axios.post("/products", product);
    return response.data || null;
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
    return null;
  }
}

// Uppdatera produkt
export async function update(product) {
  try {
    const response = await axios.put(`/products/${product.id}`, product);
    return response.data || null;
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
    return null;
  }
}

// Ta bort produkt
export async function remove(id) {
  try {
    const response = await axios.delete(`/products/${id}`);
    return response.data || null;
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
    return null;
  }
}

// Lägg till rating
export async function addRating(productId, value) {
  try {
    const response = await axios.post(`/products/${productId}/rate`, {
    
      value
    });
    return response.data || null;
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
    return null;
  }
}




















/* import axios from "./api";

//Hämta alla produkter
export async function getAll() {
  try {
    const response = await axios.get("/products");
    if (response.status === 200) return response.data;
    else return [];
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
    return [];
  }
}

//Hämta en produkt
export async function getOne(id) {
  try {
    const response = await axios.get(`/products/${id}`);
    if (response.status === 200) return response.data;
    else return null;
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
    return null;
  }
}

//Skapa produkt
export async function create(product) {
  try {
    const response = await axios.post("/products", product);
    if (response.status === 200) return response.data;
    else return null;
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
    return null;
  }
}

//Uppdatera produkt
export async function update(product) {
  try {
    const response = await axios.put(`/products/${product.id}`, product);
    if (response.status === 200) return response.data;
    else return null;
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
    return null;
  }
}

//Ta bort produkt
export async function remove(id) {
  try {
    const response = await axios.delete(`/products/${id}`);
    if (response.status === 200) return response.data;
    else return null;
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
    return null;
  }
}

//Lägg till rating
export async function addRating(productId, value) {
  try {
    const response = await axios.post(
      `/products/${productId}/rate`,
      { 
        userId: 1,
        value 
      }
    );
    if (response.status === 200) return response.data;
    else return null;
  } catch (e) {
    e?.response ? console.log(e.response.data) : console.log(e);
    return null;
  }
}

 */


/*   Fake test */

/* import { products } from "../../fakedata/products";

// Hämta alla
export async function getAll() {
  return products;
}

// Hämta en
export async function getOne(id) {
  return products.find((p) => p.id == id);
}

// Skapa
export async function create(product) {
  product.id = products.length + 1;
  product.Ratings = [];
  products.push(product);
  return product;
}

// Uppdatera
export async function update(updatedProduct) {
  const index = products.findIndex(p => p.id === updatedProduct.id);
  products[index] = updatedProduct;
  return updatedProduct;
}

// Ta bort
export async function remove(id) {
  const index = products.findIndex(p => p.id === id);
  products.splice(index, 1);
  return true;
}

// Lägg till rating
export async function addRating(productId, value) {
  const product = products.find(p => p.id == productId);

  product.Ratings.push({
    userId: 1,
    value
  });

  return product;
} */