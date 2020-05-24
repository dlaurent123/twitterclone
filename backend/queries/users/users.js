const db = require("../../database/index");

const getUser = async (req, res) => {
  const { id } = req.body;
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

const createUser = async (req, res) => {
  const { id, userName, email, dob, bio, avatar } = req.body;
  try {
    await db.none("INSERT INTO users VALUES($1,$2,$3,$4,$5,$6)", [
      id,
      userName,
      email,
      dob,
      bio,
      avatar,
    ]);
    res.status(200).json({
      message: "user created",
    });
  } catch (error) {
    if (error.constraint === "users_user_name_key") {
      res.status(404).json({ error: "user name already exists" });
    }
  }
};

module.exports = { getUser, createUser };
// , deleteUser, updateUser
