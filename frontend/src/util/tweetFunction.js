import axios from "axios";
import { apiUrl } from "./apiUrl";
import { clearForm } from "../features/form/FormSlice";
import { updateModal } from "../features/modal/modalSlice";
import { getUsersPosts } from "./getUsersPosts";

export const tweetFunction = (id, token, history) => async (
  dispatch,
  getState
) => {
  const { form } = getState();
  const { tweet, hash } = form;
  const API = apiUrl();

  try {
    let res = await axios({
      method: "POST",
      url: `${API}/api/posts`,
      data: {
        postBody: tweet,
        posterId: id,
      },
      headers: {
        authToken: token,
      },
    });

    if (hash) {
      try {
        await axios({
          method: "POST",
          url: `${API}/api/hashtags`,
          data: {
            postId: res.data.post.post_id,
            hashtag: hash,
          },
          headers: {
            authToken: token,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(clearForm);
    dispatch(updateModal());
    dispatch(getUsersPosts(id, token));
  } catch (error) {
    console.log(error);
  }
};
