class Expense{
    constructor(id, title, amount,category, date){
        this.id = id;
        this.title = title;
        this.amount = amount;
        this.category = category;
        this.date = date;
    }
}

module.exports = Expense;