// Den här filen hanterar API-anrop till backend för produkter
// Metoderna motsvarar backendens productService
// Här använder vi axios för att kommunicera med servern
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
