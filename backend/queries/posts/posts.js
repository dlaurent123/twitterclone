const db = require("../../database/index");

const createPost = async (req, res) => {
  const { postBody, posterId, postImg } = req.body;
  try {
    await db.none(
      "INSERT INTO posts(post_body,poster_id,post_image) VALUES($1,$2,$3) ",
      [postBody, posterId, postImg]
    );
    res.status(200).json({ status: 200, message: "post created" });
  } catch (error) {
    res.status(400).json({ status: 400, message: error });
    console.log(error);
  }
};

const deletePostByUserId = async (req, res) => {
  const { posterId, postId } = req.body;
  try {
    await db.none("DELETE FROM posts WHERE poster_id = $1 AND post_id = $2", [
      posterId,
      postId,
    ]);
    res.status(200).json({
      status: 200,
      message: "post by user deleted",
    });
  } catch (error) {
    res.status(404).json({ status: 404, message: "oops something went wrong" });
  }
};
const getAllPostsByUserId = async (req, res) => {
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

module.exports = { createPost, getAllPostsByUserId, deletePostByUserId };
