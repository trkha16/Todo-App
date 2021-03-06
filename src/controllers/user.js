const mysqlDB = require('../database/mysqlConnection');

// Get all users
const getAllUsers = (req, res) => {
    const query = 'SELECT id, firstname, lastname, email, username FROM user;';
    mysqlDB.query(query, function (err, data) {
        if (err) return res.json(err);
        return res.json(data);
    });
};

// Get user by id
const getUserById = (req, res, next) => {
    const { userID } = req.params;

    const query =
        'select id, firstname, lastname, email, username from user where id = ?;';

    mysqlDB.query(query, [userID], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

// Update user by id
const updateUserById = (req, res, next) => {
    const { userID } = req.params;
    const user = req.body;
};

// Delete user by Id
const deleteUserById = (req, res, next) => {
    const { userID } = req.params;

    const query = 'delete from user where id = ?';

    mysqlDB.query(query, userID, (err, data) => {
        if (err) return res.json(err);
        if (data.affectedRows === 0)
            return res.json({ message: `Khong ton tai id: ${userID}` });
        return res.json({ message: 'success' });
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
};
