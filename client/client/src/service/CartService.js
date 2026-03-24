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






/* Fake test */

/* const CART_KEY = "cart";

//hämta
export function getCart(userId) {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
}

//spara
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

//lägg till (NU MATCHAR BACKEND)
export function addToCart(userId, product, amount = 1) {
  const cart = getCart();

  const existing = cart.find(
    (item) => item.productId === product.id
  );

  if (existing) {
    existing.amount += amount;
  } else {
    cart.push({
      userId,
      productId: product.id,
      amount,
      product: product 
    });
  }

  saveCart(cart);
}

//ta bort
export function removeFromCart(userId, productId) {
  const cart = getCart().filter(
    (item) => item.productId !== productId
  );

  saveCart(cart); 
} */