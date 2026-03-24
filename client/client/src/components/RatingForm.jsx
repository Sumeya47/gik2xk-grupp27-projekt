import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import { addRating } from "../service/ProductService";

function RatingForm({ productId, onSuccess }) {
  const [value, setValue] = useState(0);

  const handleSubmit = async () => {
    if (value === 0) return;

    await addRating(productId, value);

    setValue(0); // reset
    onSuccess(); // hämta produkt igen
  };

  return (
    <Box mt={2}>
      <Typography variant="body1">Ditt betyg:</Typography>

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


