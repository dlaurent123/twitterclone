import axios from "axios";
import { apiUrl } from "../util/apiUrl";
import { setPosts } from "../features/usersPostsSlice/usersPosts";

export const getUsersPosts = (id, token) => async (dispatch, getState) => {
  const API = apiUrl();

  try {
    let res = await axios({
      method: "GET",
      url: `${API}/api/posts/user/${id}`,
      headers: {
        AuthToken: token,
      },
    });
    dispatch(setPosts(res.data.posts));
  } catch (error) {
    console.log(error);
  }
};
