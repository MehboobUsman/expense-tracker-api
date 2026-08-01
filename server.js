const path = require("path")
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const app = express();


const expenseRoutes = require("./src/routes/expenseRoutes");

//Middleware
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use("/", expenseRoutes);



module.exports = app;