const express = require("express");
const blogModel = require("../Models/Blog");
const mongoose = require('mongoose');
const router = express.Router();
const cors = require('cors'); // Import the cors package

const app = express();


app.use(cors()); // Use the cors middleware
app.use(express.json());



// route to get all blogs



//The  code is returning the fetched data as an array of objects . 



router.get('/get-allblogs', async (req, res) => {
  try {
    const blogs = await blogModel.find();
    res.json(blogs);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });

  }


});


router.post('/write-blog', async (req, res) => {
  console.log('POST - /write-blog')

  const { id,selectedCategory, title, content, Base64 } = req.body;
 
  console.log(title)
  console.log(selectedCategory)
  console.log(content)
 

  if (!title || !content || !selectedCategory || !Base64) {
    return res.status(422).json({ error: "Please provide Blog Title, Content, and Category" });
  }

  try {
    const newBlog = new blogModel({ id, selectedCategory, title, content, Base64 });
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }



});




// router.delete('/delete-blog/:title', async (req, res) => {
//   const titleToDelete = req.params.title;

//   try {
//     const deletedBlog = await blogModel.findOneAndDelete({ title: titleToDelete });

//     if (!deletedBlog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }

//     res.json({ message: 'Blog deleted successfully', deletedBlog });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


router.delete('/delete-blog/:id', async (req, res) => {

  const idToDelete = req.params.id;


  try {
    const deletedBlog = await blogModel.findByIdAndDelete(idToDelete);

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully', deletedBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



// router.put('/update-blog/:title', async (req, res) => {
//   const titleToUpdate = req.params.title;
//   const updateData = req.body; // The updated data for the blog

//   try {
//     const updatedBlog = await blogModel.findOneAndUpdate(
//       { title: titleToUpdate },
//       updateData,
//       { new: true }
//     );

//     if (!updatedBlog) {
//       return res.status(404).json({ message: 'Blog not found' });
//     }

//     res.json({ message: 'Blog updated successfully', updatedBlog });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

router.put('/update-blog/:id', async (req, res) => {
  const idToUpdate = req.params.id;
  const updateData = req.body; // The updated data for the blog

  try {
    const updatedBlog = await blogModel.findByIdAndUpdate(
      idToUpdate,
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


router.get('/get-last-id', async (req, res) => {
  try {
    const lastEntry = await blogModel.findOne().sort({ id: -1 }).exec();
    const lastId = lastEntry ? lastEntry.id : 0;
    res.json({ lastId });
  } catch (error) {
    console.error('Error fetching last ID:', error);
    res.status(500).json({ error: 'Failed to fetch last ID' });
  }
});


module.exports = router;
