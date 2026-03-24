import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <Typography>Kunde inte hämta produkter</Typography>;
  }

  return (
    <Grid container spacing={3} alignItems="stretch">
      {products.map((product) => (
        <Grid
          key={product.id}
          item 
          xs={3}
          sm={6}
          md={3}
          lg={3}
          sx={{ display: "flex" }}
        >
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;

