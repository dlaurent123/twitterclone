const db = require("../../database/index");

const addTag = async (req, res) => {
  const { hashtag, postId } = req.body;
  const hashtagArr = hashtag.split(" ");
  const queryStr = hashtagArr
    .map((tag, i) => {
      return `($${i + 1},${postId})`;
    })
    .join(", ");

  try {
    await db.none(
      "INSERT INTO hashtags (hashtag, post_hashtaged) VALUES" + queryStr,
      hashtagArr
    );
    res
      .status(200)
      .json({ status: 200, message: "hashtag added", tags: hashtagArr });
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
  }
};

const search = async (req, res) => {
  const { hashtag } = req.params;

  try {
    let posts = await db.any(
      "SELECT * FROM posts LEFT JOIN users ON posts.poster_id = users.user_id LEFT JOIN hashtags ON post_id = post_hashtaged WHERE hashtags.hashtag LIKE $1 ",
      [`#${hashtag}`]
    );
    res
      .status(200)
      .json({ status: 200, message: "all posts with hashtag recieved", posts });
  } catch (error) {
    res.status(404).json({ status: 404, message: "error" });
    console.log(error);
  }
};

module.exports = { addTag, search };
