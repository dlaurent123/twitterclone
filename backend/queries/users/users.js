const db = require("../../database/index");

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    let user = await db.one("SELECT * FROM users WHERE user_id = $1", [id]);
    if (user) {
      res.status(200).json({
        status: 200,
        user,
        message: "user returned",
      });
    } else {
      throw error;
    }
  } catch (error) {
    res.status(404).json({ status: 404, message: "user not found" });
  }
};

const createUser = async (req, res) => {
  const {
    id,
    userName,
    email,
    dob,
    bio,
    avatar,
    location,
    website,
    bannerImg,
    name,
  } = req.body;
  try {
    await db.none("INSERT INTO users VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)", [
      id,
      userName,
      email,
      name,
      dob,
      bio,
      location,
      website,
      bannerImg,
      avatar,
    ]);
    res.status(200).json({
      status: 200,
      message: "user created",
    });
  } catch (error) {
    if (error.constraint === "users_user_name_key") {
      res
        .status(404)
        .json({ status: 404, message: "user name or email already exists" });
    } else {
      res.status(404).json({ status: 404, message: "email already exists" });
    }
  }
};

const updateUser = async (req, res) => {
  const { id, name, bio, location, website, bannerImg, avatar } = req.body;

  try {
    await db.none(
      `UPDATE users SET name = $1, bio = $2, location = $3, website = $4, banner_img = 5$, avatar = $6  WHERE id =$7`,
      [name, bio, location, website, bannerImg, avatar, id]
    );
    res.status(200).json({
      status: 200,
      message: "user updated",
    });
  } catch (error) {
    res.status(400).json({ status: 400, message: "bad request" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    await db.none("DELETE FROM users WHERE id =$1", [id]);
    res.status(200).json({
      status: 200,
      message: "user has been successfully deleted",
    });
  } catch (error) {
    res.status(404).json({ status: 404, message: "not found" });
  }
};

const isExisting = async (req, res, next) => {
  const key = Object.keys(req.body)[0];
  const value = req.body[key];

  try {
    await db.one(`SELECT * FROM users WHERE ${key}=$1`, [value]);
    res.status(200).json({
      status: 200,
      message: `${key} already exists`,
      user: true,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUser, createUser, updateUser, deleteUser, isExisting };
