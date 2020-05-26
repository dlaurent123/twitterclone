const express = require("express");
const posts = express.Router();
const postHashtagsRouter = require("./postHashtags/postHashtags");
const postLikesRouter = require("../posts/postLikes/postLikes");

const {
  getAllPostsByUserId,
  createPost,
  deletePostByUserId,
} = require("../../queries/posts/posts");

posts.use("/hashtags", postHashtagsRouter);
posts.use("/likes", postLikesRouter);

posts.get("/user", getAllPostsByUserId);
posts.post("/", createPost);
posts.delete("/", deletePostByUserId);

module.exports = posts;
