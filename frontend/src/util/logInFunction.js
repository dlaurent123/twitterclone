import { clearForm } from "../features/form/FormSlice";
import { logIn } from "./firebaseFunctions";

import { setErr } from "../features/err/errSlice";

export const logInFunction = (e) => async (dispatch, getState) => {
  e.preventDefault();
  const { form } = getState();
  const { loginE, loginP } = form;
  try {
    await logIn(loginE, loginP);
    dispatch(clearForm());
  } catch (error) {
    dispatch(setErr(error.message));
  }
};

// export default LogInFunction;
