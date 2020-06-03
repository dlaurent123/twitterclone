const express = require("express");
const users = express.Router();
const usersPostsRouter = require("./usersPosts/usersPosts");
const usersFollowsRouter = require("./usersFollows/usersFollows");
const {
  getUser,
  createUser,
  deleteUser,
  updateUser,
  isExisting,
} = require("../../queries/users/users");

users.use("/posts", usersPostsRouter);
users.use("/follows/:id", usersFollowsRouter);

users.post("/check", isExisting);
users.get("/:id", getUser);
users.post("/", createUser);
users.patch("/", updateUser);
users.delete("/", deleteUser);

module.exports = users;
