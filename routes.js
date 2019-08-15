const express = require('express');
const router = express.Router();

const db = [];
const generateId = () => Math.random().toString(36).substr(2, 8);

// GET/ http://localhost:3000/todos/
router.get('/', (req, res) => {
    return res.json({ db });
});
// POST/ http://localhost:3000/todos/
router.post('', (req, res) => {
    const { title } = req.body;
    const todo = { id: generateId(), title };
    db.push(todo);
    return res.status(201).json({ todo });
});

module.exports = router;