# Smart Expense Tracker API

A full-stack Expense Tracker application built using **Node.js**, **Express.js**, **HTML**, **CSS**, and **JavaScript**. The application allows users to manage personal expenses through a REST API and a simple web interface.

---

## Features

- Add a new expense
- View all expenses
- Update an existing expense
- Delete an expense
- Filter expenses by category
- Calculate total expenses
- Calculate total expenses by category
- Responsive frontend interface
- REST API built with Express.js
- API documentation using Swagger
- Unit testing using Jest and Supertest

---

## Technologies Used

### Backend
- Node.js
- Express.js

### Frontend
- HTML
- CSS
- JavaScript
frontend is available at: [http://localhost:3000]

### Testing
- Jest
- Supertest

### API Documentation
- Swagger UI
- swagger-jsdoc
Swagger UI: [http://localhost:3000/api-docs]
---

## Project Structure

```text
expense-tracker-api/
│── app.js
│── server.js
│── swagger.js
│── package.json
│── README.md
│── AI_NOTES.md
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── data/
│   └── utils/
│
└── tests/
    └── expense.test.js
```

---

## Installation

Install all required dependencies:

```bash
npm install
```

---

## Run the Application

Start the server:

```bash
npm start
```

---

## Frontend

Open the application in your browser:

```
http://localhost:3000
```

---

## Run Tests

```bash
npm test
```

---

## Swagger Documentation

Open the Swagger UI:

```
http://localhost:3000/api-docs
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/expenses` | Add a new expense |
| GET | `/expenses` | Get all expenses |
| GET | `/expenses?category=Food` | Filter expenses by category |
| GET | `/expenses/total` | Get total expenses |
| GET | `/expenses/total/{category}` | Get total expenses by category |
| PUT | `/expenses/{id}` | Update an expense |
| DELETE | `/expenses/{id}` | Delete an expense |

---

## Screenshots

### Expense Tracker

![Expense Tracker](images/homepage.png)

### Swagger Documentation

![Swagger Documentation](images/swagger.png)

---

## Future Improvements

- User authentication
- Database integration (MongoDB)
- Charts and analytics
- Export expenses to PDF/CSV

---

## Author

**Shaik Mehboob Usman**

Developed as part of the Software Engineering Apprenticeship Assignment.