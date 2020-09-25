import axios from "axios";
import { apiUrl } from "../util/apiUrl";
import { setUsersPosts } from "../features/postsSlice/postsSlice";

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
    dispatch(setUsersPosts(res.data.posts));
  } catch (error) {
    console.log(error);
  }
};
