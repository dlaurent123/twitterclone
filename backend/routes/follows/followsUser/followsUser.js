const express = require("express");
const followsUser = express.Router({ mergeParams: true });
const {
  getFollowers,
} = require("../../../queries/follows/followsUser/followsUser");

followsUser.get("/", getFollowers);

module.exports = followsUser;
