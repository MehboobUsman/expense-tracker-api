let editingId = null;
const form = document.getElementById("expenseForm");
form.addEventListener("submit", addExpense);

async function addExpense(event) {

    event.preventDefault();

    const expense = {
        title: document.getElementById("title").value,
        amount: Number(document.getElementById("amount").value),
        category: document.getElementById("category").value,
        date: document.getElementById("date").value
    };

    let response;

    if (editingId !== null) {

        response = await fetch(`/expenses/${editingId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(expense)
        });

        editingId = null;

        document.querySelector("button[type='submit']").innerText = "Add Expense";

    } else {

        response = await fetch("/expenses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(expense)
        });

    }

    const data = await response.json();

    alert(data.message);

    form.reset();

    loadExpenses();

}

async function loadExpenses() {

    const response = await fetch("/expenses");
    const data = await response.json();

    const table = document.getElementById("expenseTable");

    table.innerHTML = "";

    data.expenses.forEach(expense => {

        table.innerHTML += `
            <tr>
                <td>${expense.title}</td>
                <td>₹${expense.amount}</td>
                <td>${expense.category}</td>
                <td>${expense.date}</td>
                <td>
                    <button onclick="editExpense(${expense.id})">
                        Edit
                    </button>
                  <button onclick="deleteExpense(${expense.id})">
    Delete
</button>
                </td>
            </tr>
        `;

    });
    loadTotal();

}
async function loadTotal() {
    const response = await fetch("/expenses/total");
    const data = await response.json();

    document.getElementById("totalAmount").innerText = `₹${data.total}`;
}

async function deleteExpense(id) {

    const response = await fetch(`/expenses/${id}`, {
        method: "DELETE"
    });

    const data = await response.json();

    alert(data.message);

    loadExpenses();
}
async function editExpense(id) {

    const response = await fetch("/expenses");

    const data = await response.json();

    const expense = data.expenses.find(expense => expense.id === id);

    document.getElementById("title").value = expense.title;
    document.getElementById("amount").value = expense.amount;
    document.getElementById("category").value = expense.category;
    document.getElementById("date").value = expense.date;

    editingId = id;

    document.querySelector("button[type='submit']").innerText = "Update Expense";

}
loadExpenses();
