const Todo = require('../models/Todo')
const User = require('../models/User')

// get todo by userId
const getTodoByUserId = async (req, res, next) => {
    const { userID } = req.params;

    const user = await User.findById(userID).populate('todos')

    return res.status(200).json(user.todos);
}

// add todo to user
const createTodo = async (req, res, next) => {
    const { userID } = req.params;

    const todo = new Todo(req.body);

    const user = await User.findById(userID)

    await todo.save()

    user.todos.push(todo._id);

    await user.save()

    return res.status(200).json({success: true})
}

module.exports = {
    getTodoByUserId,
    createTodo,
}