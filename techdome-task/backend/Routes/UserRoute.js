import express from "express";
import { LoginUser, RegisterUser } from "../controllers/userController.js";

const userRoute = express.Router();

// Define routes

userRoute.post("/register", RegisterUser);
userRoute.post("/login", LoginUser);

export default userRoute;
