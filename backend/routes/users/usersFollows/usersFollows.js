const express = require("express");
const usersFollows = express.Router({ mergeParams: true });
const {
  getUsersFollows,
} = require("../../../queries/users/usersFollows/usersFollows");

usersFollows.get("/", getUsersFollows);

module.exports = usersFollows;
