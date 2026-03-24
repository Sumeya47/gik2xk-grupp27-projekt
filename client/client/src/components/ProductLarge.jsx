import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Paper,
  Typography,
  Button
} from "@mui/material";
import placeholderImage from "../assets/placeholder.png";
import Rating from "@mui/material/Rating";
import { addToCart } from "../service/CartService";


function ProductLarge({ product }) {
 
  const avgRating =
    product.Ratings && product.Ratings.length > 0
      ? product.Ratings.reduce((sum, r) => sum + r.value, 0) /
        product.Ratings.length
      : 0;
 const user = 2;
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
    <Paper sx={{ my: 4, p: 4, borderRadius: 3 }} elevation={3}>
      <Card elevation={0}>
        
        <CardMedia
          component="img"
          image={product.imageUrl || placeholderImage}
          alt={product.title}
          sx={{ borderRadius: 2, height: 350,width: "100%", objectFit: "contain", color: "#fff" }}
        />

        <CardContent>
         
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>

     
          <Typography variant="h5" color="primary" gutterBottom>
            {product.price} kr
          </Typography>

         
          <Box display="flex" alignItems="center" gap={1} mb={2}>
            <Rating value={avgRating} precision={0.5} readOnly />
            <Typography variant="body2">
              ({product.Ratings?.length || 0} recensioner)
            </Typography>
          </Box>

        
          <Typography variant="body1" sx={{ mb: 3 }}>
            {product.description}
          </Typography>

       
          <Button variant="contained" size="large" onClick={handleAddToCart}>
            Lägg i varukorg
          </Button>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default ProductLarge;


