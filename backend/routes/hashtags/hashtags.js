const express = require("express");
const hashtags = express();
const { addTag, search } = require("../../queries/hashtags/hashtags");

hashtags.post("/", addTag);
hashtags.get("/search/:hashtag", search);

module.exports = hashtags;
