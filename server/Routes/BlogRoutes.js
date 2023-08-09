const express = require("express");
const blogModel = require("../Models/Blog");
const mongoose = require('mongoose');
const router = express.Router();

router.get('/get-all-blogs', async (req, res) => {

})

router.post('/write-blog', async (req, res) => {
    
});

module.exports = router;