const express = require("express");
const UserModel = require("../Models/User");
const mongoose = require('mongoose');
const router = express.Router();

router.post("/register", async (req, res) => {

    try{
        const { name, email, password, img } = req.body;

        const user=new UserModel({
            name,
            email,
            password,
            img
        })
    
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create user' });
    }

});

module.exports = router;