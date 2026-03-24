/*const router = require("express").Router();
const cartService = require("../services/cartService");

router.post("/addProduct", (req, res) => {
    const { userId, productId, amount} = req.body;
    cartService.addProduct(userId, productId, amount).then((result) => {
          res.status(result.status).json(result.data); 
             })
    });

 module.exports = router; **/
 
 const router = require("express").Router();
const cartService = require("../services/cartService");
//hämta given användares kundvagn----
router.get("/:userId", (req, res) => {
  const { userId } = req.params;

  cartService.getCart(userId).then((result) => {
    res.status(result.status).json(result.data);
  });
});

//lägg till produkt
router.post("/addProduct", (req, res) => {
    const { userId, productId, amount} = req.body;
    cartService.addProduct(userId, productId, amount).then((result) => {
          res.status(result.status).json(result.data); 
   })
});

//ta bort produkt----
router.post("/removeProduct", (req, res) => {
  const { userId, productId } = req.body;

  cartService.removeFromCart(userId, productId).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;

