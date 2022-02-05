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

// Update todo by todoId
const updateTodoById = (req, res, next) => {
    const { todoID } = req.params;
    const newTodo = req.body;
    
    Todo.findByIdAndUpdate(todoID, newTodo)
    .then(() => {
        return res.status(200).json({success: true})
    })
    .catch((err) => {
        return res.json(err)
    })
    
}

// Delete todo by todoID
const deleteUserById = (req, res, next) => {
    const { todoID } = req.params;
    
    Todo.findByIdAndRemove(todoID)
    .then(() => {
        return res.status(200).json('Thanh cong')
    })
    .catch(err => {
        return res.json(err)
    })
}

module.exports = {
    getTodoByUserId,
    createTodo,
    updateTodoById,
    deleteUserById,
}