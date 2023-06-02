const express = require("express");
const router = express.Router();
const komponen = require("../controllers/komponen");

// router.get("/", (req, res) =>
//   res.status(200).json({ message: "welcome to challenge 4" })
// );

router.get("/komponens", komponen.index); // get all supplier
router.post("/komponens", komponen.store); // create new supplier
router.get("/komponens/:id", komponen.show); // get detail supplier
router.put("/komponens/:id", komponen.update); // update supplier
router.delete("/komponens/:id", komponen.destroy); // delete supplier

module.exports = router;
