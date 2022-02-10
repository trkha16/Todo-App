const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todo');

router
    .route('/:userID/todos')
    .get(TodoController.getTodosByUserId)
    .post(TodoController.createTodo);
router
    .route('/:todoID/todo')
    .put(TodoController.updateTodoById)
    .delete(TodoController.deleteTodoById);

module.exports = router;
