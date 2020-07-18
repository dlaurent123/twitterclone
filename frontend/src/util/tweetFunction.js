import axios from "axios";
import { apiUrl } from "./apiUrl";
import { clearForm } from "../features/form/FormSlice";
import { updateModal } from "../features/modal/modalSlice";

export const tweetFunction = (id, token) => async (dispatch, getState) => {
  const { form } = getState();
  const { tweet } = form;
  const API = apiUrl();

  try {
    await axios({
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
    dispatch(clearForm);
    dispatch(updateModal());
  } catch (error) {
    console.log(error);
  }
};
