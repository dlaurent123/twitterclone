const express = require("express");
const users = express.Router();
const {
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../../queries/users/users");

users.get("/id", getUser);
users.post("/", createUser);
users.patch("/", updateUser);
users.delete("/", deleteUser);

module.exports = users;
