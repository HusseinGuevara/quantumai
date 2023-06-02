const express = require('express');
const authController = require('./../controllers/authController.js');

// User Routes
const router = express.Router();

router.post('/signup', authController.signup);

module.exports = router;