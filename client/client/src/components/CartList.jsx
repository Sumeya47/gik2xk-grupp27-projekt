//Här är en komponten som innhåller en list med produkterna i kundvagnen
import CartProduct from "./CartProduct";
import { Typography } from "@mui/material";

/* Den tar emot "cart" (array av produkter i kundvagn) och 
"onRemove" (funktion för att ta bort produkt) */
function CartList({ cart, onRemove }) {
  //Om kundvagnen är tom visas ett meddelande
  if (!cart || cart.length === 0) {
    return <Typography>Varukorgen är tom</Typography>;
  }

  return (
    <>
      {cart.map((item) => (
        <CartProduct
          key={item.id}
          item={item}
          onRemove={onRemove}
        />
      ))}
    </>
  );
}

export default CartList;



