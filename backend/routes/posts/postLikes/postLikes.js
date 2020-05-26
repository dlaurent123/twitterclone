const express = require("express");
const postLikes = express.Router({ mergeParams: true });
const {
  getAllLikesOfPost,
} = require("../../../queries/posts/postLikes/postLikes");

postLikes.get("/", getAllLikesOfPost);

module.exports = postLikes;
