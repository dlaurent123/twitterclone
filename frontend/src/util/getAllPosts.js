import axios from "axios";
import { apiUrl } from "../util/apiUrl";
import { setAllPosts } from "../features/postsSlice/postsSlice";

export const getAllPosts = (token) => async (dispatch, getState) => {
  const API = apiUrl();

  try {
    let res = await axios({
      method: "GET",
      url: `${API}/api/users/posts`,
      headers: {
        AuthToken: token,
      },
    });
    // debugger;
    dispatch(setAllPosts(res.data.posts));
  } catch (error) {
    console.log(error);
  }
};
