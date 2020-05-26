const db = require("../../../database/index");

const getAllPostsByUsers = async (req, res) => {
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

module.exports = { getAllPostsByUsers };
