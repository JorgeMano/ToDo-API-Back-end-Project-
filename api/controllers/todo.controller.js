const { Todo } = require('../models/todo.model');
const { filterObj } = require('../util/filterObj');

// GET All Todos
exports.getAllTodos = async (req, res) => {
    try {
            const todos = await Todo.findAll({
                where: { status: 'active' }
            });

            res.status(200).json({
                status: 'success',
                data: {
                    todos
                },
            });
    } catch (error) {
        console.log(error);
    }
};

// GET Todo By Id
exports.getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findOne({
            where: { id: id, status: 'active' }
        });
        
        if(!todo) {
            res.statys(404).json({
                status: 'error',
                message: 'Todo not found',
            });
            return;
        }

        res.status(200).json({
            status: 'success',
            data: {
                todo
            },
        });
    } catch (error) {
        console.log(error);
    }
};

// POST Todo
exports.createNewTodo = async (req, res) => {
    try {
        const { content } = req.body;
        if(!content){
            res.status(400).json({
                status: 'error',
                message: 'Must provide a valid content',
            });
            return;
        }

        const newTodo = await Todo.create({
            content,
        });

        res.status(201).json({
            status: 'success',
            data: { newTodo },
        });

    } catch (error) {
        console.log(error);
    };
};

// PATCH Todo
exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        //const data = filterObj(req.body, 'content');
        const { content } = req.body;

        const todo = await Todo.findOne({
            where: { id, status: 'active' }
        });

        if(!todo) {
            res.status(404).json({
                status: 'error',
                message: 'Cant update todo, invalid ID',
            });
            return;
        }

        await todo.update({ ...content });
        res.status(204).json({ status:'success' })

    } catch (error) {
        console.log(error);
    }
};

// DELETE Todo
exports.deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findOne({ where: { id: id } });

        if(!todo) {
            res.status(404).json({
                status: 'error',
                message: 'Cant delete todo, invalid Id',
            });
            return;
        }

        await todo.update({ status: 'deleted' });

        res.status(204).json({ status: 'success' });

    } catch (error) {
        console.log(error);
    }
};