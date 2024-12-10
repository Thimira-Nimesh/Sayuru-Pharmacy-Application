import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log;
});

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
