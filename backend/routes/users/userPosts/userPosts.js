const express = require("express");
const userPosts = express.Router({ mergeParams: true });
const {
  getPostsByUser,
} = require("../../../queries/users/userPosts/userPosts");

userPosts.get("/", getPostsByUser);

module.exports = userPosts;
