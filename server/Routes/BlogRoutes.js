const express = require("express");
const blogModel = require("../Models/Blog");
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser=require("body-parser")

app.use(bodyParser.urlencoded({extended:true}))

router.get('/get-all-blogs', async (req, res) => {


    
})

router.post('/write-blog', async (req, res) => {
    
    


});

module.exports = router;