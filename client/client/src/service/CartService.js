// Den här filen hanterar API-anrop till backend för kundvagnen
// Metoderna motsvarar backendens cartService
// Här använder vi axios för att kommunicera med servern
import axios from "./api";

//hämta kundvagn
export async function getCart(userId) {
  const res = await axios.get(`/cart/${userId}`);
  return res.data;
}

//lägg till produkt
export async function addToCart(userId, productId, amount = 1) {
  const res = await axios.post("/cart/addProduct", {
    userId,
    productId,
    amount
  });
  return res.data;
}

//ta bort produkt
export async function removeFromCart(userId, productId) {
  const res = await axios.post("/cart/removeProduct", {
    userId,
    productId
  });
  return res.data;
}
