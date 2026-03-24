// Den här vyn visar alla produkter
// Hämtar data från backend via ProductService
import { useEffect, useState } from "react";
import { getAll } from "../service/ProductService";
import ProductList from "../components/ProductList";
import { Container, Typography, CircularProgress, Box } from "@mui/material";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    //Hämtar alla produkter från backend när komponenten laddas
    getAll()
      .then((data) => {
        setProducts(data || []);
      })
      //Sparar produkterna i state och hanterar eventuella fel
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      //Uppdaterar loading-status när hämtningen är klar
      .finally(() => {
        setLoading(false);
      });
  }, []);


  return (
    <Container sx={{ mt: 4 }}>
    <Box>
        <Typography variant="h3" align="center" gutterBottom>
        Scented Candles</Typography> 
    </Box>
    {/* Använder mui-komponent som visualiserar när sidan läs in */}
      {/* Loading */}
      {loading && (
        <Box textAlign="center" mt={4}>
          <CircularProgress />
        </Box>
      )}

      {/* Data */}
      {!loading && !error && (
        <ProductList products={products} />
      )}
    </Container>
  );
}

export default Products;