const express = require("express");
const medicineRouter = express.Router();
const postMedicine = require("../controllers/MedicineController");
const findMedicine = require("../controllers/MedicineController");

medicineRouter.post("/", postMedicine);
medicineRouter.get("/", findMedicine);

module.exports = medicineRouter;
