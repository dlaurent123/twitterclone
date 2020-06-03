const db = require("../../../database/index");

const getUsersFollows = async (req, res) => {
  let { userId } = req.params;
  try {
    let follows = await db.any(
      "SELECT user_followed_id, user_name, name, bio, avatar FROM follows LEFT JOIN users ON user_followed_id = users.user_id WHERE follower_id = $1",
      [userId]
    );
    res
      .status(200)
      .json({ status: 200, message: "all follows returned", follows });
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
};

module.exports = { getUsersFollows };
