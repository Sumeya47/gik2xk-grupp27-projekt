/* import ProductCard from "./ProductCard";
import { getAll } from '../service/ProductService';
import { useEffect, useState } from 'react';
import { Grid } from "@mui/material";

function ProductList({ pathname }) {
const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll(pathname).then((products) => {
      setProducts(products);
    });
  }, [pathname]);

  return (
    <Grid container spacing={3}>
      {products?.length > 0 ? (
        products.map((product) => (
          <Grid
            item
            key={product.id}
            xs={12}   
            sm={6}    
            md={4}    
            lg={3}    
          >
            <ProductCard product={product} />
          </Grid>
        ))
      ) : (
        <h3>Kunde inte hämta produkter</h3>
      )}
    </Grid>
  );
}

export default ProductList; */

/*import { Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";


function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <Typography>Kunde inte hämta produkter</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;*/


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

