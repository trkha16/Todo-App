const express = require('express')
const router = express.Router()
const TodoController = require('../controllers/todo')

router.route('/:userID/todos')
    .get(TodoController.getTodoByUserId)
    .post(TodoController.createTodo)

module.exports = router
