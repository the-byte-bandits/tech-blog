const express = require("express");
const blogModel = require("../Models/Blog");
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors'); // Import the cors package
const { v4: uuidv4 } = require('uuid');

 // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const app= express();


app.use(cors()); // Use the cors middleware
app.use(express.json());
// Define the route to get all blogs




// #############################################
//ye function proper array of objects return kare
// #############################################
router.get('/get-allblogs', async (req, res) => {
  try {
    const blogs = await blogModel.find();
    res.json(blogs);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: 'Internal server error' });
  }
});


// #############################################
// payload wala issue resolve karo
// #############################################
router.post('/write-blog', async (req, res) => {
  console.log('POST - /write-blog')
  
  const { selectedCategory, title, content,Base64 } = req.body;
  const BID=uuidv4();
  console.log(title)
  console.log(selectedCategory)
  console.log(content)
  console.log(BID)
  const id=BID;
  if (!title || !content || !selectedCategory||!Base64) {
    return res.status(422).json({ error: "Please provide Blog Title, Content, and Category" });
  }

  try {
    const newBlog = new blogModel({id,selectedCategory, title, content,Base64 });
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }

  
  
});




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



module.exports = router;
