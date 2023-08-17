const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { checkEmailAndPassword, validateRegistrationData, checkAuth } = require('../Middleware/middlewares'); // Import your middleware functions
const { loginController, registerController, dashboradController, logoutController, updateUserController } = require('../Controller/controllers'); // Import your controller functions


router.patch('/user-update', updateUserController)
router.post("/register", validateRegistrationData , registerController);
router.post("/login", checkEmailAndPassword, loginController)
router.get('/dashboard',checkAuth,dashboradController)
router.post('/logout',logoutController);

module.exports = router;