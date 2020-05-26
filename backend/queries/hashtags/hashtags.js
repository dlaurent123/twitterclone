const db = require("../../database/index");

const addTag = async (req, res) => {
  const { hashtag, postId } = req.body;
  try {
    await db.none(
      "INSERT INTO hashtags (hashtag, post_hashtaged) VALUES($1,$2)",
      [hashtag, postId]
    );
    res.status(200).json({ status: 200, message: "hashtag added" });
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
};

module.exports = { addTag };
