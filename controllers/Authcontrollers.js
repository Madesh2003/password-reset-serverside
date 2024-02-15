const express = require('express');
const router = express.Router();
const AuthController = require('../Routers/Authrouter');

router.post('/forgotpassword', AuthController.forgotPassword);
router.post('/resetpassword/:token', AuthController.resetPassword);

module.exports = router;
