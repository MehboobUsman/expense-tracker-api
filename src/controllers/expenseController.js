const Expense = require('../models/expenseModel');
const expenses = require('../data/expenseData');

//Add Expense

const addExpense = (req, res) => {
    const { title, amount, category, date } = req.body;

    const expense = new Expense(expenses.length + 1, title, amount, category, date);

    expenses.push(expense);

    res.status(201).json({ message: "Expense added successfully", expense });
};

//GET All Expenses

const getAllExpenses = (req, res) => {
    const { category } = req.query;
    if(category){
        const filteredExpenses = expenses.filter(
            expense => expense.category.toLowerCase() === category.toLowerCase()
        );
        return res.status(200).json({
            expenses: filteredExpenses
        });
    }
    res.status(200).json({ expenses });
};



//Calculate Total Expenses
const getTotalExpenses = (req,res)=>{
    const total = expenses.reduce((sum,expense)=> sum + expense.amount,0);
    res.status(200).json({
        total
    });
};

//Total Expenses By Category
const getTotalByCategory = (req,res)=>{
    const { category } = req.params;

    const total = expenses
    .filter(expense => expense.category.toLowerCase() === category.toLowerCase()) .reduce((sum, expense)=> sum + expense.amount,0);

    res.status(200).json({
        category,total
    });
};

//Delete Expense
const deleteExpense = (req,res)=>{
    const id = parseInt(req.params.id);
    const index = expenses.findIndex(expenses=> expenses.id === id);
    if(index===-1){
        return res.status(404).json({
            message: "Expense not found"
        });
    }
    expenses.splice(index,1);
    res.status(200).json({
        message: "Expense deleted successfully"
    });
};

//Update Expense
const updateExpense = (req,res)=>{
    const id = parseInt(req.params.id);
    const { title, amount, category, date } = req.body;
    const expense=expenses.find(expense=> expense.id === id);
    if(!expense){
        return res.status(404).json({
            messag: "Expense not found"
        });
    }
    expense.title = title;
    expense.amount = amount;
    expense.category = category;
    expense.date = date;
    res.status(200).json({
        message: "Expense updated successfully",
        expense
    });
};
module.exports = {
    addExpense, getAllExpenses, getTotalExpenses, getTotalByCategory, updateExpense, deleteExpense
};
