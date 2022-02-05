const User = require('../models/User')

// Get all users
const getAllUsers = async (req, res, next) => {
    const user = await User.find()

    return res.status(200).json(user);
}

// Get user by id
const getUserById = async (req, res, next) => {
    const { userID } = req.params;

    const user = await User.find({
        _id: userID
    })

    return res.status(200).json(user);
}

// Update user by id
const updateUserById = (req, res, next) => {
    const { userID } = req.params;
    const user = req.body;

    User.findByIdAndUpdate(userID, user)
    .then(() => {
        return res.status(200).json({success: true})
    })
    .catch((err) => {
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