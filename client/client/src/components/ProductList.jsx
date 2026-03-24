//Den här komponenten listar upp enskild ProductCard (produkter)
//Används i ProductDetail vyn
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
   //Om inget finns i ProductCard så visas ett meddelande
  if (!products || products.length === 0) {
    return <Typography>Kunde inte hämta produkter</Typography>;
  }

  return (
  // Använder Grid för att visa produkter på ett strukturerat och responsivt sätt
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

