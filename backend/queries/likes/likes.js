const db = require("../../database/index");

const createLike = async (req, res) => {
  const { likerId, postId } = req.body;
  try {
    await db.none("INSERT INTO likes (liker_id,liked_post_id) VALUES($1,$2)", [
      likerId,
      postId,
    ]);
    res.status(200).json({ status: 200, message: "post liked" });
  } catch (error) {
    res.status(400).json({ status: 400, message: "bad request" });
  }
};

const deleteLike = async (req, res) => {
  const { likerId, postId } = req.body;
  try {
    await db.none(
      "DELETE FROM likes WHERE liker_id = $1 AND liked_post_id = $2",
      [likerId, postId]
    );
    res.status(200).json({ status: 200, message: "post unliked" });
  } catch (error) {
    res.status(400).json({ status: 400, message: "bad request" });
  }
};

module.exports = { createLike, deleteLike };
