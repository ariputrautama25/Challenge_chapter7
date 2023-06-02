const express = require("express");
const router = express.Router();
const pemasok = require("../controllers/pemasok");

// router.get("/", (req, res) =>
//   res.status(200).json({ message: "welcome to challenge 7" })
// );

router.get("/pemasoks", pemasok.index); // get all supplier
router.post("/pemasoks", pemasok.store); // create new supplier
router.get("/pemasoks/:id", pemasok.show); // get detail supplier
router.put("/pemasoks/:id", pemasok.update); // update supplier
router.delete("/pemasoks/:id", pemasok.destroy); // delete supplier

module.exports = router;
