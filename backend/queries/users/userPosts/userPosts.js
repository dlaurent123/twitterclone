const db = require("../../../database/index");

const getAllPostsByUsers = async (req, res) => {
  try {
    let posts = await db.any(
      "SELECT users.user_id, users.user_name, users.name, users.avatar, posts_done.post_id, posts_done.post_body, posts_done.post_image, posts_done.post_time, tags FROM (SELECT posts.*, array_remove(ARRAY_AGG(hashtags.hashtag), NULL) AS tags FROM posts LEFT JOIN hashtags ON posts.post_id = hashtags.post_hashtaged GROUP BY posts.post_id ORDER BY post_time DESC) AS posts_done JOIN users ON users.user_id = posts_done.poster_id"
    );
    res.status(200).json({
      status: 200,
      posts,
      message: "all posts retrieved",
    });
  } catch (error) {
    res.status(404).json({ status: 404, message: "no posts found" });
  }
};

module.exports = { getAllPostsByUsers };
