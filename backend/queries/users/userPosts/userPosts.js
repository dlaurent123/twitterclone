const db = require("../../../database/index");

const getPostsByUser = async (req, res) => {
  const { id } = req.body;
  try {
    let posts = await db.any(
      "SELECT * FROM posts WHERE poster_id = $1 ORDER BY post_time DESC",
      [id]
    );
    res.status(200).json({
      message: "all post by user retrieved",
      posts,
    });
  } catch (error) {
    res.status(404).json({ message: "oops something went wrong" });
  }
};

module.exports = { getPostsByUser };
