const express = require("express");
const UserModel = require("../Models/User");
const router = express.Router();
const bcrypt = require('bcrypt')
const { body, validationResult } = require('express-validator');
const { checkEmailAndPassword, validateRegistrationData, checkAuth } = require('../Middleware/middlewares'); // Import your middleware functions
const { loginController, registerController, dashboradController, logoutController, updateUserController } = require('../Controller/controllers'); // Import your controller functions


router.patch('/user-update', updateUserController)
router.post("/register", validateRegistrationData , registerController);
router.post("/login", checkEmailAndPassword, loginController)
router.get('/dashboard',checkAuth,dashboradController)
router.post('/logout',logoutController);

// router.post('/user/update', )

module.exports = router;