const db = require("../../../database/index");

const getFollowers = async (req, res) => {
  const { userFollowed } = req.body;
  try {
    let followers = await db.any(
      "SELECT follower_id, user_name,name,bio,avatar FROM follows LEFT JOIN users ON follower_id = users.user_id WHERE user_followed_id = $1",
      [userFollowed]
    );
    res.status(200).json({
      status: 200,
      message: "all followers returned",
      followers,
    });
  } catch (error) {
    res.status(400).json({ status: 400, message: "bad request" });
  }
};

module.exports = { getFollowers };
