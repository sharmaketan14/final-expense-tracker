const express = require('express');
const router = express.Router();
const expenseControllers = require('../Controllers/expense.js')

router.post('/add', expenseControllers.add);
router.get('/extract', expenseControllers.extract);

module.exports = router;