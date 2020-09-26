const db = require("../../database/index");

const createPost = async (req, res) => {
  const { postBody, posterId, postImg } = req.body;
  try {
    let post = await db.oneOrNone(
      "INSERT INTO posts(post_body,poster_id,post_image) VALUES($1,$2,$3) RETURNING *  ",
      [postBody, posterId, postImg]
    );

    res.status(200).json({ status: 200, message: "post created", post });
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
  const { id } = req.params;
  try {
    let posts = await db.any(
      "SELECT users.user_id, users.user_name, users.name, users.avatar, posts_done.post_id, posts_done.post_body, posts_done.post_image, posts_done.post_time, tags FROM (SELECT posts.*, array_remove(ARRAY_AGG(hashtags.hashtag), NULL) AS tags FROM posts LEFT JOIN hashtags ON posts.post_id = hashtags.post_hashtaged GROUP BY posts.post_id ORDER BY post_time DESC) AS posts_done JOIN users ON users.user_id = posts_done.poster_id WHERE users.user_id =$1",
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
