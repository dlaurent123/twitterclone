const express = require("express");
const hashtags = express();
const { addTag } = require("../../queries/hashtags/hashtags");

hashtags.post("/", addTag);

module.exports = hashtags;
