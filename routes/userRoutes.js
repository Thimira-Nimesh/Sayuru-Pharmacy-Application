import express from "express";
import {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers,
} from "../controllers/usercontroller.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.post("/", postUsers);

userRouter.put("/", putUsers);

userRouter.delete("/", deleteUsers);

export default userRouter;
