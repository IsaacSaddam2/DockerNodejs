const mongoose = require('mongoose');

//creating schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Post must have title"]     //this property is required 
    },
    body: {
        type: String,
        require: [true, "Post must have body"]
    }
});

const Post = mongoose.model("Post", postSchema); //it will add model to mongoose

module.exports = Post;