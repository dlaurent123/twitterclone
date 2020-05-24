const db = require("../../database/index");
const checkKeys = require("./helpers");

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

const updateUser = async (req, res) => {
  const { id } = req.body;
  const { column, valueToUpdate } = checkKeys(req.body);

  try {
    await db.none(`UPDATE users SET ${column} = $1 WHERE id =$2`, [
      valueToUpdate,
      id,
    ]);
    res.status(200).json({
      message: "user updated",
    });
  } catch (error) {
    if (error.constraint === "users_user_name_key") {
      res.status(404).json({ error: "user name already exists" });
    }
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    await db.none("DELETE FROM users WHERE id =$1", [id]);
    res.status(200).json({
      message: "user has been successfully deleted",
    });
  } catch (error) {
    res.status(404).json({ message: "opps something went wrong" });
  }
};

module.exports = { getUser, createUser, updateUser, deleteUser };
