import { clearForm } from "../features/form/FormSlice";
import { logIn } from "./firebaseFunctions";
import axios from "axios";
import { apiUrl } from "./apiUrl";

import { setErr } from "../features/err/errSlice";

export const logInFunction = (e) => async (dispatch, getState) => {
  e.preventDefault();
  const API = apiUrl();
  const { form } = getState();
  const { loginE, loginP } = form;
  if (!loginE.includes("@")) {
    try {
      let res = await axios.get(`${API}/api/users/login/${loginE}`);
      if (res.data.user === false) {
        throw res.data;
      } else {
        let email = res.data.email.email;
        await logIn(email, loginP);
        dispatch(clearForm());
      }
    } catch (error) {
      dispatch(setErr(error.message));
    }
  } else {
    try {
      await logIn(loginE, loginP);
      dispatch(clearForm());
    } catch (error) {
      dispatch(setErr(error.message));
    }
  }
};

export const demoLogin = () => async (dispatch, getState) => {
  try {
    await logIn("user3@gmail.com", "testtest");
    dispatch(clearForm());
  } catch (error) {
    dispatch(setErr(error.message));
  }
};
