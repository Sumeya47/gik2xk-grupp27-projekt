// Den här komponenten låter användaren sätta ett betyg på en produkt
// Skickar rating till backend
import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { addRating } from "../service/ProductService";

function RatingForm({ productId, onSuccess }) {
  const [value, setValue] = useState(0);
//Lägger till rating till produkten och uppdaterar produkten med rating
  const handleSubmit = async () => {
    if (value === 0) return;

    await addRating(productId, value);

    setValue(0); // reset
    onSuccess(); // hämta produkt igen
  };

  return (
    <Box mt={2}>
      <Typography variant="body1">Ditt betyg:</Typography>
      {/* Använder muis rating kompnoent för att fylla i betyg */}
      <Rating
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      />

      <Box mt={1}>
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={value === 0}
        >
          Skicka betyg
        </Button>
      </Box>
    </Box>
  );
}

export default RatingForm;


