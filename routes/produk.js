const express = require("express");
const router = express.Router();
const produk = require("../controllers/produk");

// router.get("/", (req, res) =>
//   res.status(200).json({ message: "welcome to challenge 4" })
// );

router.get("/produks", produk.index); // get all supplier
router.post("/produks", produk.store); // create new supplier
router.get("/produks/:id", produk.show); // get detail supplier
router.put("/produks/:id", produk.update); // update supplier
router.delete("/produks/:id", produk.destroy); // delete supplier

module.exports = router;
