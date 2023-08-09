"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).send({ res: todos, message: "success" });
});
router.put('/put/:todoid', (req, res, next) => {
    const id = req.params.todoid;
    const index = todos.findIndex(ele => ele.id === id);
    if (index >= 0) {
        todos[index] = { id: todos[index].id, text: req.body.text };
        return res.status(201).json({ res: todos, message: 'put success' });
    }
    res.status(404).json({ message: 'could not found' });
});
router.delete('/delete/:todoid', (req, res, next) => {
    const id = req.params.todoid;
    todos = todos.filter(ele => ele.id != id);
    res.status(201).json({ res: todos, message: 'delete success' });
});
//module.exports= router;
exports.default = router;
