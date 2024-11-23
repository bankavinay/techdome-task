import express from "express";
import { createLoan, approveLoan } from "../controllers/loanController.js";

const loanRoute = express.Router();

loanRoute.post("/create-loan", createLoan);

export default loanRoute;
