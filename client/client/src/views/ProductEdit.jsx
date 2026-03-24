// Den här vyn används för att skapa en ny produkt
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { create, getOne, update } from "../service/ProductService";

import {
  Box,
  Button,
  Container,
  TextField,
  Typography
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SaveIcon from "@mui/icons-material/Save";

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const emptyProduct = {
    id: 0,
    title: "",
    description: "",
    price: "",
    imageUrl: ""
  };

  const [product, setProduct] = useState(emptyProduct);
//Körs när komponenten laddas eller när id ändras
//Hämtar en produkt från backend om id finns
//Om inget id finns skapas en tom produkt
  useEffect(() => {
    if (id) {
      getOne(id).then((data) => setProduct(data));
    } else {
      setProduct(emptyProduct);
    }
  }, [id]);
/* Hittar vart ändringa har gjorts genom att kolla vilket värde "name" 
   och ändrar i produkten */
  function onChange(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }
/* Vid sparande skickas data till backend via ProductService */
  async function onSave() {
  if (id) {
    await update(product);  //uppdatera om id finns
  } else {
    await create(product);  //skapa ny om inget id
  }
  navigate("/", { replace: true });
}

  return (
  // Innehåller ett formulär där användaren fyller i produktens information
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Skapa produkt
      </Typography>

      <Box mt={3}>
        <form>
          {/* Namn */}
          <TextField
            fullWidth
            margin="normal"
            label="Produktnamn"
            name="title"
            value={product.title}
            onChange={onChange}
          />

          {/* Beskrivning */}
          <TextField
            fullWidth
            margin="normal"
            label="Beskrivning"
            name="description"
            multiline
            minRows={4}
            value={product.description}
            onChange={onChange}
          />

          {/* Pris */}
          <TextField
            fullWidth
            margin="normal"
            label="Pris"
            name="price"
            type="number"
            value={product.price}
            onChange={onChange}
          />

          {/* Bild */}
          <TextField
            fullWidth
            margin="normal"
            label="Bild URL"
            name="imageUrl"
            value={product.imageUrl}
            onChange={onChange}
          />

          {/* Knappar */}
          <Box display="flex" mt={3}>
            <Box flexGrow={1}>
              <Button
                startIcon={<ChevronLeftIcon />}
                variant="contained"
                onClick={() => navigate(-1)}
                sx={{ mr: 1 }}
              >
                Tillbaka
              </Button>
            </Box>
    
            <Button
              startIcon={<SaveIcon />}
              variant="contained"
              color="success"
              onClick={onSave}
            >
              Spara
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default ProductEdit;