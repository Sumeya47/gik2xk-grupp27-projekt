import ProductLarge from "../components/ProductLarge";
import RatingForm from "../components/RatingForm";
import Rating from "@mui/material/Rating";
import {
  Box,
  Button,
  Container,
  Typography,
  Alert
} from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getOne, remove } from "../service/ProductService";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';


function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [product, setProduct] = useState(null);
  const [open, setOpen] = useState(true);

  const message = location.state?.message;

  const fetchProduct = () => {
    getOne(id).then((data) => setProduct(data));
  };
  //
  const handleDelete = async () => {
    if (!window.confirm("Är du säker att du vill ta bort produkten?")) return;

    await remove(product.id);
    navigate("/", { replace: true });
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  function clearMessage() {
    window.history.replaceState({}, "");
  }

  return product ? (
    <>
      {/* Feedback message */}
      {message && open && (
        <Alert
          onClose={() => {
            setOpen(false);
            clearMessage();
          }}
          variant="filled"
          severity="success"
        >
          {message}
        </Alert>
      )}

      <Container maxWidth="lg">
        {/* Produkt */}
        <ProductLarge product={product} />

        <Box mt={4}>
  <Typography variant="h5">Sätt betyg</Typography>

  <RatingForm
    productId={product.id}
    onSuccess={fetchProduct}
  />
</Box>

{/* Lista rating */}
  <Box mt={4}>
    <Typography variant="h5">Alla betyg</Typography>

    {product.Ratings && product.Ratings.length > 0 ? (
        product.Ratings.map((r, index) => (
        <Box key={index} display="flex" alignItems="center" gap={1}>
            <Rating value={r.value} readOnly size="small" />
            <Typography variant="body2">
            {r.value} / 5
            </Typography>
        </Box>
        ))
    ) : (
        <Typography>Inga betyg än</Typography>
    )}
  </Box>

        {/* Knappar */}
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ChevronLeftIcon />}
            onClick={() => navigate(-1)}
          >
            Tillbaka
          </Button>

          <Button
            startIcon={<EditIcon />}
            variant="contained"
            sx={{ mr: 2 }}
            onClick={() => navigate(`/products/${product.id}/edit`)}
          >
            Ändra
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            variant="contained"
            color="error"
            onClick={handleDelete}
            >
            Ta bort
          </Button>
        </Box>

        {/* Rating */}
        <Box>
          <Typography variant="h4" gutterBottom>
            Betyg
          </Typography>

{/*           <RatingForm
            product={product}
            refresh={fetchProduct}
          /> */}
        </Box>
      </Container>
    </>
  ) : (
    <Typography>Kunde inte hämta produkt</Typography>
  );
}

export default ProductDetailPage;