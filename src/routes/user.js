const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')

router.route('/')
    .get(UserController.getAllUsers)
router.route('/:userID')
    .get(UserController.getUserById)
    .put(UserController.updateUserById)
    .delete(UserController.deleteUserById)
router.route('/signup')
    .post(UserController.signUp)
module.exports = router