const express = require("express");
const router = express.Router();

const { addExpense, getAllExpenses, getTotalExpenses, getTotalByCategory,updateExpense, deleteExpense} = require("../controllers/expenseController");
/**
 * @swagger
 * /expenses:
 *   post:
 *     summary: Add a new expense
 *     tags: [Expenses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               amount:
 *                 type: number
 *               category:
 *                 type: string
 *               date:
 *                 type: string
 *     responses:
 *       201:
 *         description: Expense added successfully
 */
router.post("/expenses", addExpense);
/**
 * @swagger
 * /expenses:
 *   get:
 *     summary: Get all expenses
 *     tags: [Expenses]
 *     responses:
 *       200:
 *         description: List of all expenses
 */
router.get("/expenses", getAllExpenses);
/**
 * @swagger
 * /expenses/total:
 *   get:
 *     summary: Get total amount of all expenses
 *     tags: [Expenses]
 *     responses:
 *       200:
 *         description: Total expenses
 */
router.get("/expenses/total", getTotalExpenses);
/**
 * @swagger
 * /expenses/total/{category}:
 *   get:
 *     summary: Get total expenses by category
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: Expense category
 *     responses:
 *       200:
 *         description: Total expenses for the specified category
 */
router.get("/expenses/total/:category", getTotalByCategory);
/**
 * @swagger
 * /expenses/{id}:
 *   put:
 *     summary: Update an expense
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Expense ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               amount:
 *                 type: number
 *               category:
 *                 type: string
 *               date:
 *                 type: string
 *     responses:
 *       200:
 *         description: Expense updated successfully
 */
router.put("/expenses/:id", updateExpense);
/**
 * @swagger
 * /expenses/{id}:
 *   delete:
 *     summary: Delete an expense
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Expense ID
 *     responses:
 *       200:
 *         description: Expense deleted successfully
 */
router.delete("/expenses/:id", deleteExpense);

module.exports = router;