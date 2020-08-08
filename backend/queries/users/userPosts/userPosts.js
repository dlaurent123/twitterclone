const db = require("../../../database/index");

const getAllPostsByUsers = async (req, res) => {
  try {
    let posts = await db.any(
      "SELECT user_id,user_name, name,avatar,post_id,post_body,post_image,post_time,hashtag, hashtag_id FROM posts LEFT JOIN users ON posts.poster_id = users.user_id LEFT JOIN hashtags ON post_id = post_hashtaged ORDER BY posts.post_time desc"
    );
    res.status(200).json({
      status: 200,
      posts,
      message: "all posts retrieved",
    });
  } catch (error) {
    res.status(404).json({ status: 404, message: error });
  }
};

module.exports = { getAllPostsByUsers };
