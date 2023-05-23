
const express = require('express');
const router = express.Router();
const { getPosts, getPost, createPost, updatePosts, deletePosts } = require("../controllers/postsController");



// GET METHOD for get all the posts in DB
// router.route("/").get(getPosts);


// POST METHOD for Cretae the posts in DB
// router.route("/").post(createPost);


// @ if the URL is same for two API"S we can also write it in short format like below. !important
router.route("/").get(getPosts).post(createPost);
router.route("/:id").get(getPost).put(updatePosts).delete(deletePosts);

// GET METHOD for get individual posts
// router.route("/:id").get(getPost);

// PUT METHOD for Update the posts in DB
// router.route("/:id").put(updatePosts);

// DELETE METHOD for Delete the posts in DB
// router.route("/:id").delete(deletePosts);


module.exports = router;