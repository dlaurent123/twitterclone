const express = require("express");
const postHashtags = express.Router({ mergeParams: true });
const {
  getPostsWithHashtag,
} = require("../../../queries/posts/postHashtags/postHashtags");

postHashtags.get("/", getPostsWithHashtag);

module.exports = postHashtags;
