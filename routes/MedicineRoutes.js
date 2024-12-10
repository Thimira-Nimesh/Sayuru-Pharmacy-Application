const express = require("express");
const medicineRouter = express.Router();
const postMedicine = require("../controllers/MedicineController");

medicineRouter.get("/", (req, res) => {
  res.json({
    message: "Hello",
  });
});

medicineRouter.post("/", postMedicine);

module.exports = medicineRouter;
