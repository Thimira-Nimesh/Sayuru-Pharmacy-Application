const { Medicine } = require("../models");

function postMedicine(req, res) {
  const medicine = req.body;
  console.log(medicine);
  const newMedicine = new Medicine(medicine);
  newMedicine
    .save()
    .then(() => {
      res.json({
        message: "Medicine Created Successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "Medicine Creation Failed",
        err,
      });
    });
}
module.exports = postMedicine;

function findMedicine(req, res) {
  Medicine.findAll()
    .then((medicinelist) => {
      res.json({
        medicinelist,
      });
    })
    .catch(() => {
      res.json({
        message: "medicine list Error",
      });
    });
}
module.exports = findMedicine;
