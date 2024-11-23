import loansModel from "../models/Loansmodel.js";

const createLoan = async (req, res) => {
  const { amount, term } = req.body;
  try {
    const loan = new loansModel({ customer: req.user.id, amount, term });
    await loan.save();
    // Generate repayment schedules here...
    res.status(201).json({ message: "Loan created", loan });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const approveLoan = async (req, res) => {
  try {
    const loan = await loansModel.findById(req.params.id);
    if (!loan) return res.status(404).json({ message: "Loan not found" });
    loan.status = "APPROVED";
    await loan.save();
    res.json({ message: "Loan approved", loan });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createLoan, approveLoan };
