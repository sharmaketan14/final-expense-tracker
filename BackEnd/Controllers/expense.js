const expense = require('../Models/expense-item.js')

function add(req, res) {
    const data = req.body;
    const obj = new expense(data.id, data.title, data.amount, data.date);
    obj.save();

    res.json("Got it!")
}

async function extract(req, res) {
    let arr;
    const data = await expense.extract();
    arr = data;
    res.json(arr);
}

module.exports = {add: add, extract: extract};