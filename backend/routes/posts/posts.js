const express = require("express");
const posts = express.Router();
const {
  getAllPosts,
  deletePost,
  createPost,
} = require("../../queries/posts/posts");

posts.get("/", getAllPosts);

module.exports = posts;
