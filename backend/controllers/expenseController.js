const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//------------------------- @desc    Get all expenses
//@route    GET /api/expenses
//@access   Private
const getExpenses = async (req, res) => {
  try {
    const expenses = await prisma.expenses.findMany();
    return res.status(200).json(expenses);
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    res.status(500).json({ message: "Internal server error" });
    process.exit(1);
  }
};


//------------------------- @desc    Get  monthly expenses
//@route    GET /api/expenses/monthly
//@access   Private
const getMonthlyExpenses = async (req, res) => {
  const currentMonth = new Date().toLocaleString('en-US', { month : 'long'})
  try {
    const monthlyExpenses = await prisma.expenses.findMany({
      where: {
        month: currentMonth,
      },
      orderBy : [
        {
          createdAt : 'desc'
        }
      ]
    });
    return res.status(200).json(monthlyExpenses);
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    res.status(500).json({ message: "Internal server error" });
    process.exit(1);
  }
};

//------------------------ @desc    get single expense
//@route    GET /api/expenses
//@access   Private
const getSingleExpense = async (req,res) =>{
  const id = parseInt(req.params.id)
  if(!req.params.id){
    return res.status(400).json({message : "Bad request"})
  }
  try {
    const singleExpense = await prisma.expenses.findUnique({
      where : {
          id : id
      }
  })
  return res.status(200).json(singleExpense)
  }
   catch (error) {
    console.error(error);
    await prisma.$disconnect();
    res.status(500).json({ message: "Internal server error" });
    process.exit(1);
  }
}


//------------------------ @desc    create a new expense
//@route    POST /api/expenses
//@access   Private
const setExpenses = async (req, res) => {
  if (!req.body.name && !req.body.category && !req.body.amount) {
    return res.status(400).json({ message: "please add the necessary fields" });
  }
  try {
    const newExpense = await prisma.expenses.create({
      data: {
        name: req.body.name,
        category: req.body.category,
        amount: parseInt(req.body.amount),
        createdAt: new Date().toISOString(),
        month: new Date().toLocaleString("en-US", { month: "long" }),
        year: parseInt(new Date().getFullYear()),
      },
    });
    return res
      .status(201)
      .json({ message: "created a new expense", newExpense });
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    res.status(500).json({ message: "Internal server error" });
    process.exit(1);
  }
};

//----------------------- @desc    update an expense
//@route    PUT /api/expenses/:id
//@access   Private
const updateExpenses = async (req, res) => {
  if (!req.body.name && !req.body.category && !req.body.amount) {
    return res.status(400).json({ message: "please add the necessary fields" });
  }
  try {
    const updatedExpense = await prisma.expenses.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        name: req.body.name,
        category: req.body.category,
        amount: parseInt(req.body.amount),
      },
    });
    return res.status(200).json({ updatedExpense });
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    res.status(500).json({ message: "Internal server error" });
    process.exit(1);
  }
};

//----------------------- @desc    delete an expense
//@route    DELETE /api/expenses/:id
//@access   Private
const deleteExpenses = async (req, res) => {
  try {
    const deletedExpense = await prisma.expenses.delete({
      where: {
        id: parseInt(req.params.id),
      },
    });
    return res.status(200).json({ deletedExpense });
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    res.status(500).json({ message: "Internal server error" });
    process.exit(1);
  }
};

module.exports = {
  getExpenses,
  getMonthlyExpenses,
  getSingleExpense,
  setExpenses,
  updateExpenses,
  deleteExpenses,
};
