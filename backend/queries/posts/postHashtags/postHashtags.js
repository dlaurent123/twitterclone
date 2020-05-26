const db = require("../../../database/index");

const getPostsWithHashtag = async (req, res) => {
  const { hashtag } = req.body;

  try {
    let posts = await db.any(
      "SELECT * FROM posts RIGHT JOIN hashtags ON posts.post_id = hashtags.post_hashtaged WHERE hashtag LIKE $1 ORDER BY post_time DESC",
      [hashtag]
    );
    res.status(200).json({
      status: 200,
      message: "all posts including hashtag recieved",
      posts,
    });
  } catch (error) {
    res.status(400).json({ status: 400, message: "bad request" });
  }
};

module.exports = { getPostsWithHashtag };
