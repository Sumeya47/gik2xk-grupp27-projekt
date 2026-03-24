import CartProduct from "./CartProduct";
import { Typography } from "@mui/material";

function CartList({ cart, onRemove }) {
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



