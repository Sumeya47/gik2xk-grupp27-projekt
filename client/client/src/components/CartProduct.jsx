//Den här komponenten innehåller enskilda produkter i kundvagnen
import { Box, Typography, Button } from "@mui/material";

function CartProduct({ item, onRemove }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
      p={2}
      border="1px solid #ddd"
      borderRadius={2}
    >
      {/* Visar namn, pris och antal */}
      <Box>
        <Typography variant="h6">{item.title}</Typography>
        <Typography>
          {item.CartRow.amount} x {item.price} kr
        </Typography>
      </Box>
      {/* En knapp som tar bort produkt från kundvagn */}
      <Button
        color="error"
        onClick={() => onRemove(item.id)}
      >
        Ta bort
      </Button>
    </Box>
  );
}

export default CartProduct;


