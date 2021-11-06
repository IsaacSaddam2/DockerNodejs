const Post = require("../models/postModel");

//To get all posts

exports.getAllPosts = async (req, res, next) => {
    try {

        const posts = await Post.find();   //connect with mongoose and fetch all posts

        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: {
                posts,
            }
        })
    } catch (e) {
        console.log(e);
        res.status(400);
    }
};

//to get one post

exports.getOnePost = async (req, res, next) => {
    try {

        const post = await Post.findById(req.params.id);   //connect with mongoose and fetch posts correspoding to id

        res.status(200).json({
            status: 'success',
            data: {
                post,
            }
        })
    } catch (e) {
        console.log(e);
        res.status(400);
    }
};

//to create a post in Posts 

exports.createPost = async (req, res, next) => {
    try {

        const post = await Post.create(req.body);   //create a post object from request body and add it in Posts 

        res.status(200).json({
            status: 'success',
            data: {
                post,
            }
        })
    } catch (e) {
        console.log(e);
        res.status(400);
    }
};

//update a post

exports.updatePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators: true,
        });   //update a post object from request body 

        res.status(200).json({
            status: 'success',
            data: {
                post,
            }
        });
    } catch (e) {
        console.log(e);
        res.status(400);
    }
};

//deleting a post 

exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)   //delete a post object from request body 

        res.status(200).json({
            status: 'success',
        });
    } catch (e) {
        console.log(e);
        res.status(400);
    }
};
