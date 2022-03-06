const express = require('express');
// Controllers
const {
    getAllTodos,
    getTodoById,
    createNewTodo,
    updateTodo,
    deleteTodo,
} = require('../controllers/todo.controller');

const router = express.Router();
// GET
router.get('/', getAllTodos);
// GET By ID
router.get('/:id', getTodoById);
//POST
router.post('/', createNewTodo),
//PACTH
router.patch('/:id', updateTodo),
//DELETE
router.delete('/:id', deleteTodo),

module.exports = { todosRouter: router };
