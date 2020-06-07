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
const { checkFirebaseToken } = require("../../middleWare/auth");

users.use("/posts", checkFirebaseToken, usersPostsRouter);
users.use("/follows/:id", checkFirebaseToken, usersFollowsRouter);

users.post("/check", isExisting);
users.get("/:id", checkFirebaseToken, getUser);
users.post("/", createUser);
users.patch("/", checkFirebaseToken, updateUser);
users.delete("/", checkFirebaseToken, deleteUser);

module.exports = users;
