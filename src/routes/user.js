const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')

router.route('/')
    .get(UserController.getAllUsers)
router.route('/:userID')
    .get(UserController.getUserById)
    .post(UserController.updateUserById)
    .delete(UserController.deleteUserById)
module.exports = router