const express = require("express");
const usersPosts = express.Router({ mergeParams: true });
const {
  getAllPostsByUsers,
} = require("../../../queries/users/userPosts/userPosts");

usersPosts.get("/", getAllPostsByUsers);

module.exports = usersPosts;
