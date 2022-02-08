const Todo = require('../models/Todo')
const User = require('../models/User')

// get todo by userId
const getTodoByUserId = (req, res, next) => {
    const { userID } = req.params;

    Todo.find({
        userId: userID,
        deleted: false
    })
    .then((data) => {
        return res.status(200).json(data);
    })
    .catch((err) => {
        return res.json(err)
    })
}

// add todo to user
const createTodo = async (req, res, next) => {
    try{
        const { userID } = req.params;

        const todo = new Todo(req.body);

        todo.userId = userID

        const user = await User.findById(userID)

        await todo.save()

        user.todos.push(todo._id);

        await user.save()

        return res.status(200).json({success: true})
    }
    catch (err) {
        res.status(500).json(err)
    }
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
const deleteTodoById = (req, res, next) => {
    const { todoID } = req.params;

    Todo.findById(todoID)
    .then((data) => {
        data.deleted = true
        data.save()
        return res.status(200).json({success: true})
    })
    .catch(err => {
        return res.json(err)
    })
}

module.exports = {
    getTodoByUserId,
    createTodo,
    updateTodoById,
    deleteTodoById,
}