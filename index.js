// const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const MedicineRouter = require("./routes/MedicineRoutes");
// import userRouter from "./routes/userRoutes.js";
// import mysql from "mysql";
// import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = require("./models");

// app.use(bodyParser.json());

app.use("/api/medicines", MedicineRouter);

// app.use("/api/users", userRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
  });
});
