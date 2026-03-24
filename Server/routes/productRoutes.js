const router = require("express").Router();
const productService = require("../services/productService");

// GET - Hämta alla produkter
router.get('/', (req, res) => {
    productService.getAll().then((result) => {
       res.status(result.status).json(result.data); 
    });
});
// GET - Hämta en specifik produkt med betyg
router.get("/:id", (req, res) => {
    const id = req.params.id;
    productService.getById(id).then((result) => {
          res.status(result.status).json(result.data); 
             })
    });
// POST - Skapa en ny produkt
router.post("/", (req, res) => {
    const product = req.body;
    productService.create(product).then((result) => {
       res.status(result.status).json(result.data); 
    });

});

// PUT - Uppdatera en produkt
router.put("/:id", (req, res) => {
    const product = req.body;
    const id = req.params.id;
    productService.update(product, id).then((result) => {
       res.status(result.status).json(result.data); 
    });
});

// DELETE - Ta bort en produkt
router.delete("/:id", (req, res) => {
   const id = req.params.id;
    productService.destroy(id).then((result) => {
       res.status(result.status).json(result.data); 
    });
});

// POST - Lägg till ett betyg/rating på en produkt
router.post("/:id/rate", (req, res) => {
  const { value } = req.body; //rating

  productService.addRating(req.params.id, value).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
