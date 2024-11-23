import mongoose from "mongoose";

const LoansSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
    min: 1000,
    max: 100000,
  },

  loan_term: {
    type: Number,
    required: true,
    min: 1,
    max: 52,
  },
  loan_status: {
    type: String,
    enum: ["PENDING", "APPROVED", "PAID", "REJECTED"],
    default: "PENDING",
  },
  loan_start_date: {
    type: Date,
    default: Date.now,
  },
  loan_end_date: {
    type: Date,
  },
});

const loansModel =
  mongoose.models.loans || mongoose.model("loans", LoansSchema);

export default loansModel;
