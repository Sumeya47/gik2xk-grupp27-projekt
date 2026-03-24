import { Link, Outlet } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from "./assets/Image20260324192702.png"

//Design för header
function App() {
  return (
    <>
      <Box component="header" sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">   
              {/* Bild som vår logotyp som tar användaren till Product.jsx */}
              <img
                  src={logo}
                  alt="Pure Candle"
                  style={{ height: "40px", display: "block" }}
                />
              </Link>
            </Typography>
           {/*  Knapp till ProductEdit vyn */}
            <Button color="inherit">
              <Link to="/products/new">Lägg till produkt</Link>
            </Button>
            {/* knapp till Cart vyn */}
            <Button color="inherit" component={Link} to="/cart" startIcon={<AddShoppingCartIcon />}>
              Varukorg
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ mt: 4 }} maxWidth="xl" component="main">
        <Outlet />
      </Container>
    </>
  );
}

export default App;