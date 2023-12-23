const express = require("express");
const router = express.Router();
const {
  getExpenses,
  setExpenses,
  updateExpenses,
  deleteExpenses,
  getMonthlyExpenses,
  getSingleExpense,
} = require("../controllers/expenseController");

router.get("/", getExpenses); // get all the expenses
router.get("/monthly",getMonthlyExpenses); // get that particular month expenses
router.post("/", setExpenses); // create a new expense
router.put("/:id", updateExpenses); // update an expense from id
router.delete("/:id", deleteExpenses); //  delete an expense from id
router.get("/getsingleexpense/:id",getSingleExpense) // get single expense detail from id

module.exports = router;
