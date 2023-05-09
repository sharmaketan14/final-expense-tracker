const db = require('../data/database.js')

class expenseItem {
    constructor(id, title, amount, date) {
        this.id = id;
        this.title = title;
        this.amount = amount;
        this.date = date;
    }

    async save() {
        const data = {
            id: this.id,
            title : this.title,
            amount : this.amount,
            date: this.date
        }
        await db.getDb().collection('expenses').insertOne(data);
    }

    static async extract() {
        const data = await db.getDb().collection('expenses').find({}).toArray();
        console.log(data);
        return data;
    }
};

module.exports = expenseItem