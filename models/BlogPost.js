const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    abstract: String,
    body: String,
    username: {
        type: String,
        default: "Benjamin Suh"
    },
    datePosted:{
        type: Date,
        default: new Date()
    },
});

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost;