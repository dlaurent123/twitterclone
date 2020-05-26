const express = require("express");
const posts = express.Router();

const {
  getAllPostsByUserId,
  createPost,
  deletePostByUserId,
} = require("../../queries/posts/posts");

posts.get("/:id", getAllPostsByUserId);
posts.post("/", createPost);
posts.delete("/", deletePostByUserId);

module.exports = posts;
