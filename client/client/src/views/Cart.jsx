// Den här vyn visar alla produkter i kundvagnen
// Hämtar data från backend via CartService
import { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import CartList from "../components/CartList";
import { getCart, removeFromCart } from "../service/CartService";

function Cart() {
  const [cart, setCart] = useState(null);
  const user = 2;
//Hämta kundvagn med user 2 
  const fetchCart = async () => {
    try {
      const data = await getCart(user);
      setCart(data);
    } catch (error) {
      console.error(error);
    }
  };
// Hämtar aktuell produkt från backend
  useEffect(() => {
    fetchCart();
  }, []);
// Tar bort en produkt från kundvagnen
  const handleRemove = async (productId) => {
    try {
      await removeFromCart(user, productId);
      fetchCart();
    } catch (error) {
      console.error(error);
    }
  };
//Räknar totalpris
  const totalPrice =
    cart?.Products?.reduce((sum, row) => sum + row.CartRow.amount * row.price, 
    0)
     || 0;

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Kundvagn
      </Typography>

      <CartList cart={cart?.Products || []} onRemove={handleRemove} />
      
      
    {/* totalpris */}
      <Box mt={4}>
        <Typography variant="h5">Totalt: {totalPrice} kr</Typography>
      </Box>
    </Container>
  );
}

export default Cart;

