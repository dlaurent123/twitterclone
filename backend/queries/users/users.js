const db = require("../../database/index");

const getUser = async (req, res) => {
  const id = req.body.id;
  try {
    let user = await db.one("SELECT * FROM users WHERE id = $1", [id]);
    if (user) {
      res.status(200).json({
        user,
        message: "user returned",
      });
    } else {
      throw error;
    }
  } catch (error) {
    res.status(404).json("user not found");
  }
};

module.exports = { getUser };
// createUser, deleteUser, updateUser
