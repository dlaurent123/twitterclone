const db = require("../../database/index");

const getAllUsers = async (req, res) => {
  try {
    let users = await db.any("SELECT * FROM users");
    if (users.length) {
      res.status(200).json({
        users,
        message: "All users returned",
      });
    } else {
      throw "No users found";
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = { getAllUsers };
// createUser, deleteUser, updateUser
