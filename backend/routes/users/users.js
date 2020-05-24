const express = require("express");
const users = express.Router();
const {
  getAllUsers,
  // createUser,
  // deleteUser,
  // updateUser
} = require("../../queries/users/users");

users.get("/", getAllUsers);

module.exports = users;
