const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/account');

router.route('/signup').post(AccountController.signUp);

module.exports = router;
