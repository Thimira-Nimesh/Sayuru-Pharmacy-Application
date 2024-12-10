// const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

// import userRouter from "./routes/userRoutes.js";
// import mysql from "mysql";
// import cors from "cors";

const app = express();
app.use(cors());

const db = require("./models");

// app.use(bodyParser.json());

// app.use("/api/users", userRouter);

db.sequelize.sync().then(() => {
  app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
  });
});
