const db = require("../../database/index");

const getAllPosts = async (req, res) => {
  try {
    let posts = await db.any("SELECT * FROM posts ORDER BY post_time DESC");
    res.status(200).json({
      status: 200,
      posts,
      message: "all posts retrieved",
    });
  } catch (error) {
    res.status(404).json({ status: 404, message: "oops something went wrong" });
  }
};

const createPost = async (req, res) => {
  const { postBody, posterId, postImg } = req.body;
  try {
    await db.none("INSERT INTO posts VALUES($1,$2,$3)", [
      postBody,
      posterId,
      postImg,
    ]);
    res.status(200).json({ status: 200, message: "post created" });
  } catch (error) {}
};

module.exports = { getAllPosts, createPost };
