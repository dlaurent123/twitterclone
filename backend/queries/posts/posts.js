const db = require("../../database/index");

const getAllPosts = async (req, res) => {
  try {
    let posts = await db.any(
      "SELECT id,user_name, name,avatar,post_id,post_body,post_image,post_time FROM posts LEFT JOIN users ON posts.poster_id = users.id ORDER BY posts.post_time desc"
    );
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
  } catch (error) {
    res.status(400).json({ status: 400, message: "bad request" });
  }
};

module.exports = { getAllPosts, createPost };
