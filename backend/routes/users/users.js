const express = require("express");
const users = express.Router();
const usersPostsRouter = require("./usersPosts/usersPosts");
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
users.use("/posts", usersPostsRouter);

module.exports = users;
