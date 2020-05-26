const db = require("../../database/index");

const createFollow = async (req, res) => {
  const { followerId, userFollowedId } = req.body;
  try {
    await db.none(
      "INSERT INTO follows (follower_id, user_followed_id) VALUES($1,$2)",
      [followerId, userFollowedId]
    );
    res.status(200).json({ status: 200, message: "success" });
  } catch (error) {
    res.status(400).json({ status: 400, message: "bad request" });
    console.log(error);
  }
};

const unFollow = async (req, res) => {};

module.exports = { createFollow, unFollow };
