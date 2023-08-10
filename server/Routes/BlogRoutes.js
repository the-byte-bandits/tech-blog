const express = require("express");
const blogModel = require("../Models/Blog");
const mongoose = require('mongoose');
const router = express.Router();

router.get('/get-all-blogs', async (req, res) => {
  // Implement logic to fetch and return all blogs
  try {
    const blogs = await blogModel.find(); // Assuming you have a model named 'blogModel'
    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/write-blog', async (req, res) => {
  const { category, title, content } = req.body;

  if (!title || !content || !category) {
    return res.status(422).json({ error: "Please provide Blog Title, Content, and Category" });
  }

  try {
    const newBlog = new blogModel({ category, title, content });
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
