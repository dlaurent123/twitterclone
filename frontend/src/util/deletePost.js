import { apiUrl } from "./apiUrl";
import axios from "axios";
import { updatePosts } from "../features/postsSlice/postsSlice";

export const deletePost = (postId, posterId, token) => async (
  dispatch,
  getState
) => {
  const API = apiUrl();
  try {
    await axios({
      method: "DELETE",
      url: `${API}/api/posts`,
      data: {
        posterId,
        postId,
      },
      headers: {
        authToken: token,
      },
    });
    dispatch(updatePosts());
  } catch (error) {
    console.log(error);
  }
};
