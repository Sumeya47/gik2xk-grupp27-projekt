const router = require("express").Router();
const cartService = require("../services/cartService");


// GET - Hämta given användares varukorg
router.get("/:userId", (req, res) => {
  const { userId } = req.params;

  cartService.getCart(userId).then((result) => {
    res.status(result.status).json(result.data);
  });
});


// POST - Lägg till en produkt i varukorgen
router.post("/addProduct", (req, res) => {
    const { userId, productId, amount} = req.body;
    cartService.addProduct(userId, productId, amount).then((result) => {
          res.status(result.status).json(result.data); 
   })
});

//ta bort produkt----
// POST - Ta bort produkt från varukorgen
router.post("/removeProduct", (req, res) => {
  const { userId, productId } = req.body;

  cartService.removeFromCart(userId, productId).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;

