import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { create, getOne, remove, update } from "../service/ProductService";

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

  useEffect(() => {
    if (id) {
      getOne(id).then((data) => setProduct(data));
    } else {
      setProduct(emptyProduct);
    }
  }, [id]);

  function onChange(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

/*  async function onSave() {
    await create(product);
    navigate("/", { replace: true });
  } */

    async function onSave() {
  if (id) {
    await update(product);  // ← uppdatera om id finns
  } else {
    await create(product);  // ← skapa ny om inget id
  }
  navigate("/", { replace: true });
}
/*   async function onDelete() {
    await remove(product.id);
    navigate("/", { replace: true });
  } */

  return (
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

{/*               {id && (
                <Button
                  startIcon={<DeleteIcon />}
                  variant="contained"
                  color="error"
                  onClick={onDelete}
                >
                  Ta bort
                </Button>
              )} */}
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