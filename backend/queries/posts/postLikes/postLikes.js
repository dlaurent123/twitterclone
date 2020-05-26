const db = require("../../../database/index");

const getAllLikesOfPost = async (req, res) => {
  const { postId } = req.body;

  try {
    let likes = await db.any("SELECT * FROM likes WHERE liked_post_id = $1", [
      postId,
    ]);
    res
      .status(200)
      .json({ status: 200, message: "returned all likes of post", likes });
  } catch (error) {
    res.status(400).json({ status: 400, message: "bad request" });
  }
};

module.exports = { getAllLikesOfPost };
