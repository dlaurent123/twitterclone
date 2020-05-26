const express = require("express");
const follows = express.Router();
const { createFollow, unFollow } = require("../../queries/follows/follows");
const followsUserRouter = require("./followsUser/followsUser");

follows.use("/user", followsUserRouter);

follows.post("/", createFollow);
follows.delete("/", unFollow);

module.exports = follows;
