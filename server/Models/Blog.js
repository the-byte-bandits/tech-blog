const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    id: Number,
    userName: String,
    rating: Number,
    date: String
});

const commentSchema = new mongoose.Schema({
    id: Number,
    userName: String,
    email: String,
    date: String,
    comment: String,
    pending: Boolean
});

const blogSchema = new mongoose.Schema({
   id: {type: String, required: true},
    title: String,
    selectedCategory: String,
    content: String,
    Base64:String
   // author: String,
    //totViews: Number,
    //currViews: Number,
    //date: String,
    //coverImg: String,
    //reviews: [reviewSchema],
    //comments: [commentSchema]

});

module.exports = mongoose.model('blog', blogSchema);