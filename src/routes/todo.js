const express = require('express')
const router = express.Router()
const TodoController = require('../controllers/todo')

router.route('/:userID/todos')
    .get(TodoController.getTodoByUserId)
    .post(TodoController.createTodo)
router.route('/:todoID/todo')
    .put(TodoController.updateTodoById)
    .delete(TodoController.deleteUserById)
module.exports = router
