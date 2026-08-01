const request = require("supertest");
const app = require("../server");

describe("Expense Tracker API",()=>{
   test("GET / should load the frontend", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Smart Expense Tracker");
});
    test("POST /expenses should add a new expense", async()=>{
        const response = await request(app)
        .post("/expenses")
        .send({
            title:"Pizza",
            amount:450,
            category:"Food",
            date:"2026-08-01"
        });
        expect(response.statusCode).toBe(201);
        expect(response.body.expense.title).toBe("Pizza");
    });
    test("GET /expenses should return all expenses", async()=>{
        const response = await request(app).get("/expenses");
        expect(response.statusCode).toBe(200);
    });
});