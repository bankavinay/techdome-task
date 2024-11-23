import express from "express";
import "dotenv/config";
import cors from "cors";
import userRoute from "./Routes/UserRoute.js";
import userModel from "./models/users.js";
import connectDB from "./config/db.js";
import loansModel from "./models/Loansmodel.js";
import loanRoute from "./Routes/loansRoute.js";

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("server running successfully");
});

app.use("/api/user", userRoute);
app.use("/api/loans", loanRoute);

connectDB();

app.listen(port, () => {
  console.log("server running on port number",port);
});
