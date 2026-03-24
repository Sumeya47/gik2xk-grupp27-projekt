const router = require("express").Router();
const userService = require("../services/userService");

// GET - Hämta alla användare
router.get('/', (req, res) => {
    userService.getAll().then((result) => {
       res.status(result.status).json(result.data); 
    });
});

// GET - Hämta en specifik användare
router.get("/:id", (req, res) => {
    const id = req.params.id;
    userService.getById(id).then((result) => {
          res.status(result.status).json(result.data); 
             })
    });
// GET - Hämta en användares varukorg
router.get("/:id/getCart", (req, res) => {
   const id = req.params.id;
    userService.getCart(id).then((result) => {
          res.status(result.status).json(result.data); 
             })
    });

// POST - Skapa en ny användare
router.post('/', (req, res) => {
    const user = req.body;
        userService.create(user).then((result) => {
          res.status(result.status).json(result.data); 
             })
    });

    // PUT - Uppdatera en användare
router.put("/:id", (req, res) => {
    const user = req.body;
    const id = req.params.id;
    userService.update(user, id).then((result) => {
       res.status(result.status).json(result.data); 
    });
});

// DELETE - Ta bort en användare
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    userService.destroy(id).then((result) => {
       res.status(result.status).json(result.data); 
    });
});

module.exports = router;