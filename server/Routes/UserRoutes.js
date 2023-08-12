const express = require("express");
const UserModel = require("../Models/User");
const router = express.Router();
const bcrypt = require('bcrypt')
const { body, validationResult } = require('express-validator');


// Middleware function to validate user registration data
const validateRegistrationData = [
    body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long')
      .matches(/^(?=.*\d)(?=.*[A-Z])/)
      .withMessage('Password must contain at least one uppercase letter and one number'),
    
    // Middleware continuation if validation passes
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
];

// Middleware function to check email and password
const checkEmailAndPassword = [
    body('email').notEmpty().withMessage('Email is required')
      .isEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required'),
    
    // Middleware continuation if checks pass
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
  ];

router.post("/login", checkEmailAndPassword, async (req, res) => {
    console.log('POST - /login');

    const { email, password } = req.body;
    console.log(email, password);
    const user = await UserModel.findOne({ email: email});

    if (user) {
        if(await bcrypt.compare(password, user.password)){
            // Logged In
            // Enable JWT

            res.status(200).json(user);
        }else{
            res.status(401).json({ error: 'Incorrect password' });
        }
    } else {
        res.status(404).json({ error: 'User not found' });
    }
})

router.post("/register", validateRegistrationData , async (req, res) => {
    console.log('POST - /register');

    try{

        const { name, email, password } = req.body;
        const img = req.body.img || 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png';
        const hashedPassword = await bcrypt.hash(password, 10)

        const user=new UserModel({
            name,
            email,
            password:hashedPassword,
            img
        })
    
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: 'User already exists' });
    }

});




module.exports = router;