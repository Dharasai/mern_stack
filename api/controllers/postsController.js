const asyncHandler = require("express-async-handler");
const Posts = require("../models/postsModel");

//@description Get all posts
// @route GET /api/posts
//@access private
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Posts.find({ user_id: req.user.id });
    res.status(200).json(posts);
})

//@description Get single post
// @route GET /api/posts/:id
//@access private
const getPost = asyncHandler(async (req, res) => {
    const post = await Posts.findById(req.params.id)
    if (!post) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(post);
})

//@description Create a New post
// @route POST /api/posts
//@access private
const createPost = asyncHandler(async (req, res) => {
    console.log("req: ", req.body);
    const { name, email, password, mobileno } = req.body;
    if (!name || !email || !password || !mobileno) {
        res.status(400);
        //error handler need
        throw new Error("All Fields are required");
    }
    const post = await Posts.create({
        name,
        email,
        password,
        mobileno
    })
    res.status(201).json(post);
})

//@description Update a post
// @route PUT /api/posts/id
//@access private
const updatePosts = asyncHandler(async (req, res) => {
    const post = await Posts.findById(req.params.id);
    if (!post) {
        res.status(404);
        throw new Error("Post not found");
    }
    const updatedPost = await Posts.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedPost);
});



//@description Delete a post
// @route Delete /api/posts/id
//@access private
const deletePosts = asyncHandler(async (req, res) => {
    const post = await Posts.findById(req.params.id);
    if (!post) {
        res.status(404);
        throw new Error("Post not found");
    }
    await Posts.deleteOne({ _id: req.params.id });
    res.status(200).json({ post, deleted: "successfully record deleted" });
})


module.exports = { getPosts, getPost, createPost, updatePosts, deletePosts };