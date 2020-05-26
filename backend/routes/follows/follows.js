const express = require("express");
const follows = express.Router();
const { createFollow, unFollow } = require("../../queries/follows/follows");

follows.post("/", createFollow);
follows.delete("/", unFollow);

module.exports = follows;
