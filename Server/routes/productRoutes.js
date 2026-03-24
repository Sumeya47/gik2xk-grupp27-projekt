/*const router = require("express").Router();
const productService = require("../services/productService");


router.get('/', (req, res) => {
    productService.getAll().then((result) => {
       res.status(result.status).json(result.data); 
    });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    productService.getById(id).then((result) => {
          res.status(result.status).json(result.data); 
             })
    });

router.post("/", (req, res) => {
    const product = req.body;
    productService.create(product).then((result) => {
       res.status(result.status).json(result.data); 
    });
        
});


router.put("/:id", (req, res) => {
    const product = req.body;
    const id = req.params.id;
    productService.update(product, id).then((result) => {
       res.status(result.status).json(result.data); 
    });
});


router.delete("/:id", (req, res) => {
   const id = req.params.id;
    productService.destroy(id).then((result) => {
       res.status(result.status).json(result.data); 
    });
});

module.exports = router;**/

const router = require("express").Router();
const productService = require("../services/productService");

//Hämta alla produkter
router.get('/', (req, res) => {
    productService.getAll().then((result) => {
       res.status(result.status).json(result.data); 
    });
});
//Hämta en produkt
router.get("/:id", (req, res) => {
    const id = req.params.id;
    productService.getById(id).then((result) => {
          res.status(result.status).json(result.data); 
             })
    });
//Skapa produkt
router.post("/", (req, res) => {
    const product = req.body;
    productService.create(product).then((result) => {
       res.status(result.status).json(result.data); 
    });

});

//Uppdatera produkt
router.put("/:id", (req, res) => {
    const product = req.body;
    const id = req.params.id;
    productService.update(product, id).then((result) => {
       res.status(result.status).json(result.data); 
    });
});

//Ta bort produkt
router.delete("/:id", (req, res) => {
   const id = req.params.id;
    productService.destroy(id).then((result) => {
       res.status(result.status).json(result.data); 
    });
});

//Lägg till rating
router.post("/:id/rate", (req, res) => {
  const { value } = req.body; //rating

  productService.addRating(req.params.id, value).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;
