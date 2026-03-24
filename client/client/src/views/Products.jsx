import { useEffect, useState } from "react";
import { getAll } from "../service/ProductService";
import ProductList from "../components/ProductList";
import { Container, Typography, CircularProgress, Box } from "@mui/material";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getAll()
      .then((data) => {
        setProducts(data || []);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
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