// Här är en komponent som visar en produkt som finns ProductList
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import placeholderImage from "../assets/placeholder.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Rating from "@mui/material/Rating";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { addToCart } from "../service/CartService";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const user = 2;
//Räknar snitt betyg
  const avgRating =
    product.Ratings && product.Ratings.length > 0
      ? product.Ratings.reduce((sum, r) => sum + r.value, 0) /
        product.Ratings.length
      : product.avgRating || 0;

/* Funktion för att lägga till i kundvagen när man trycker "Lägg i varukorg" */
  const handleAddToCart = async () => {
  if (!user) {
    alert("Du måste vara inloggad för att lägga till i kundvagnen");
    return;
  }
  try {
    await addToCart(user, product.id, 1);
    alert("Produkten lades till i kundvagnen");
  } catch (error) {
    console.error(error);
    alert("Kunde inte lägga till i kundvagnen");
  }
};
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: 6
        }
      }}
    >

      {/* bild */}
      <CardMedia
        component="img"
        image={product.imageUrl || placeholderImage}
        alt={product.title}
        sx={{ objectFit: "cover", height: 400}}
      />
      {/* titel */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom>
          {product.title}
        </Typography>
      {/* pris */}
        <Typography variant="h6" color="primary">
          {product.price} kr
        </Typography>
      {/* rating */}
        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <Rating value={avgRating} precision={0.5} readOnly />
          <Typography variant="body2">
            ({product.Ratings?.length || 0})
          </Typography>
        </Box>
      </CardContent>
      {/* En knapp som leder till vyn ProductDetail */}
      <CardActions sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
        <Button
          variant="outlined"
          onClick={() => navigate(`/products/${product.id}`)}
          endIcon={<ChevronRightIcon />}
        >
          Visa
        </Button>
      {/* En knapp som lägger till i kundvagnen */}
        <Button
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
          onClick={handleAddToCart}
        >
          Lägg i varukorg
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;


