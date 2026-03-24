import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Products from "./views/Products.jsx";
import ProductDetail from "./views/ProductDetail.jsx";
import Cart from "./views/Cart.jsx";
import ProductEdit from "./views/ProductEdit.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  blueGrey,
  deepPurple,
  green,
  grey,
  orange,
  purple,
  red,
  teal,
  indigo
} from '@mui/material/colors';


const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F7F3EF", 
      paper: "#E8DCD1"    
    },
    primary: {
      main: "#8B5E3C",    
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#A3B18A",    
      contrastText: "#FFFFFF"
    },
    success: {
      main: "#6D8A63"     
    },
    error: {
      main: "#A44A3F"     
    },
    text: {
      primary: "#4A2E1F",   
      secondary: "#6B4F3A"  
    }
  },
  typography: {
    fontFamily: 'Playfair Display, sans-serif',
    h1: {
      fontfamily:"Satisfy, cursive",
      fontSize: "3.7rem",
      color: "#ffffff"
    },
h2: {
      fontFamily: 'Satisfy, cursive',
      fontSize: "2.1rem",
      marginBottom: ".7em",
      color: "#6B4F3A"
    },
    h3: {
      fontFamily: 'Playfair Display, sans-serif',
      fontSize: "1.6rem",
      color: "#6B4F3A"
    },
    h4: {
      fontSize: "1.3rem",
      color: "#4A2E1F"
    },
    body1: {
      color: "#6B4F3A"
    },
    body2: {
      color: "#4A2E1F"
    }
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Products />
      },
      {
        path: "/products/:id",
        element: <ProductDetail />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/products/new",
        element: <ProductEdit />
      },
      {
        path: "/products/:id/edit",
        element: <ProductEdit />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);