const express = require("express");
const posts = express.Router();
const postHashtagsRouter = require("./postHashtags/postHashtags");
const postLikesRouter = require("../posts/postLikes/postLikes");
const { checkFirebaseToken } = require("../../middleWare/auth.js");

const {
  getAllPostsByUserId,
  createPost,
  deletePostByUserId,
} = require("../../queries/posts/posts");

posts.use("/hashtags", postHashtagsRouter);
posts.use("/likes", postLikesRouter);

posts.get("/user/:id", checkFirebaseToken, getAllPostsByUserId);
posts.post("/", checkFirebaseToken, createPost);
posts.delete("/", checkFirebaseToken, deletePostByUserId);

module.exports = posts;
