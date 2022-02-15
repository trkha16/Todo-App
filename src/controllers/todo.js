const mysqlDB = require('../database/mysqlConnection');

// get all todos by userId
const getTodosByUserId = (req, res, next) => {
    const { userID } = req.params;

    const query =
        'select id, title, detail from todo where userId = ? and deleted = false;';

    mysqlDB.query(query, userID, function (err, data) {
        if (err) return res.json(err);
        return res.json(data);
    });
};

// create todo
const createTodo = (req, res, next) => {
    const { userID } = req.params;
    const todo = req.body;

    let values = {
        title: todo.title,
        detail: todo.detail,
        userId: userID,
    };

    mysqlDB.query('insert into todo set ?', values, (err, data) => {
        if (err) return res.json(err);
        return res.json({ message: 'success' });
    });
};

// Update todo by todoId
const updateTodoById = (req, res, next) => {
    const { todoID } = req.params;
    const newTodo = req.body;

    Todo.findByIdAndUpdate(todoID, newTodo)
        .then(() => {
            return res.status(200).json({ success: true });
        })
        .catch((err) => {
            return res.json(err);
        });
};

// Delete todo by todoID
const deleteTodoById = (req, res, next) => {
    const { todoID } = req.params;

    const query = 'update todo set deleted = true where id = ?';

    mysqlDB.query(query, todoID, (err, data) => {
        if (err) res.json(err);
        res.json({ message: 'success' });
    });
};

module.exports = {
    getTodosByUserId,
    createTodo,
    updateTodoById,
    deleteTodoById,
};
