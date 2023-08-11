const express = require("express");
const blogModel = require("../Models/Blog");
const mongoose = require('mongoose');
const router = express.Router();

// Define the route to get all blogs
router.get('/get-allblogs', async (req, res) => {
  try {
    const blogs = await blogModel.find();
    res.json(blogs);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: 'Internal server error' });
  }
});

//write a Blog 
router.post('/write-blog', async (req, res) => {
  const { category, title, content } = req.body;
  console.log(title)
  console.log(category)
  console.log(content)
  
 
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
//Delete Blog  data
// Define the route to delete a blog by its title
router.delete('/delete-blog/:title', async (req, res) => {
  const titleToDelete = req.params.title;

  try {
    const deletedBlog = await blogModel.findOneAndDelete({ title: titleToDelete });

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json({ message: 'Blog deleted successfully', deletedBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.put('/update-blog/:title', async (req, res) => {
  const titleToUpdate = req.params.title;
  const updateData = req.body; // The updated data for the blog

  try {
    const updatedBlog = await blogModel.findOneAndUpdate(
      { title: titleToUpdate },
      updateData,
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json({ message: 'Blog updated successfully', updatedBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/bloging', async (req, res) => {
  const formData = req.body;
  // Process and save the formData as needed
  console.log('Received form data:', formData);

  try {
    // Create a new document using the formData and save it to the database
    const newBlog = new blogModel(formData);
    console.log(formData)
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog); // Use status 201 for successful creation
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }


 

});


module.exports = router;
