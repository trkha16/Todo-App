const User = require('../models/User')

// Get all users
const getAllUsers = (req, res, next) => {
    User.find({})
    .then((data) => {
        return res.status(200).json(data)
    })
    .catch(err => {
        return res.json(err)
    })
}

// Get user by id
const getUserById = (req, res, next) => {
    const { userID } = req.params;

    User.find({
        _id: userID
    })
    .then((data) => {
        return res.status(200).json(data)
    })
    .catch(err => {
        return res.json(err)
    })
}

// Update user by id
const updateUserById = (req, res, next) => {
    const { userID } = req.params;
    const user = req.body;

    User.findByIdAndUpdate(userID, user)
    .then(() => {
        return res.status(200).json('Thanh cong')
    })
    .catch(err => {
        return res.json(err)
    })
}

// Delete user by Id
const deleteUserById = (req, res, next) => {
    const { userID } = req.params;
    
    User.deleteOne({userID})
    .then(() => {
        return res.status(200).json('Thanh cong')
    })
    .catch(err => {
        return res.json(err)
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
}