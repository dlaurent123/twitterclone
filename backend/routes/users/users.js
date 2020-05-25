const express = require("express");
const users = express.Router();
const userPostsRouter = require("./userPosts/userPosts");
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
users.use("/posts", userPostsRouter);

module.exports = users;
