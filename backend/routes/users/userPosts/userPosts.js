const express = require("express");
const userPosts = express.Router({ mergeParams: true });
const {
  getPostsByUser,
  deletePostByUser,
} = require("../../../queries/users/userPosts/userPosts");

userPosts.get("/", getPostsByUser);
userPosts.delete("/", deletePostByUser);

module.exports = userPosts;
