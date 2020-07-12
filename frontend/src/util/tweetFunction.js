import axios from "axios";
import { apiUrl } from "./apiUrl";
import { clearForm } from "../features/form/FormSlice";
import { updateModal } from "../features/modal/modalSlice";

export const tweetFunction = (id) => async (dispatch, getState) => {
  const { form } = getState();
  const { tweet } = form;
  const API = apiUrl();

  try {
    await axios.post(`${API}/api/posts`, {
      postBody: tweet,
      posterId: id,
    });
    dispatch(clearForm);
    dispatch(updateModal());
  } catch (error) {
    console.log(error);
  }
};
