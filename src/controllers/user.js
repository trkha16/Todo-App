const User = require('../models/User');

// Get all users
const getAllUsers = (req, res, next) => {
    User.find()
        .then((data) => {
            const result = [];
            for (let i = 0; i < data.length; i++) {
                result[i] = {
                    id: data[i]._id,
                    firstName: data[i].firstName,
                    lastName: data[i].lastName,
                    email: data[i].email,
                };
            }
            return res.status(200).json(result);
        })
        .catch((err) => {
            return res.json(err);
        });
};

// Get user by id
const getUserById = (req, res, next) => {
    const { userID } = req.params;

    User.findById(userID)
        .then((data) => {
            return res.status(200).json({
                id: data._id,
                firstname: data.firstName,
                lastname: data.lastName,
                email: data.email,
            });
        })
        .catch((err) => {
            return res.json(err);
        });
};

// Update user by id
const updateUserById = (req, res, next) => {
    const { userID } = req.params;
    const user = req.body;

    User.findByIdAndUpdate(userID, user)
        .then(() => {
            return res.status(200).json({ success: true });
        })
        .catch((err) => {
            return res.json(err);
        });
};

// Create user
const signUp = (req, res, next) => {
    const user = req.body;

    User.findOne({
        email: user.email,
    })
        .then((data) => {
            if (data) {
                return res.json('Tai khoan da ton tai');
            } else {
                let password = user.password;
                let repassword = user.repassword;
                if (password === repassword) {
                    User.create(user);
                    return res.json({ success: true });
                } else {
                    return res.json('Mat khau khong khop');
                }
            }
        })
        .catch((err) => {
            return res.json(err);
        });
};

// Delete user by Id
const deleteUserById = (req, res, next) => {
    const { userID } = req.params;

    User.findByIdAndDelete(userID)
        .then(() => {
            return res.status(200).json({ success: true });
        })
        .catch((err) => {
            return res.json(err);
        });
};

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    signUp,
};
