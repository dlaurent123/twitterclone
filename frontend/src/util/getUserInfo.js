import { apiUrl } from "./apiUrl";
import { updateUser } from "../features/loggedInUserInfo/loggedInUserInfoSlice";
import { logOut } from "./firebaseFunctions";

export const getUserInfo = ({ token, id }) => async (dispatch, getState) => {
  const API = apiUrl();
  let calls = 0;

  try {
    let res = await axios({
      method: "get",
      url: `${API}/api/users/${id}`,
      headers: {
        authToken: token,
      },
    });
    dispatch(updateUser(res.data.user));
  } catch (error) {
    if (calls === 0) {
      calls += 1;
      dispatch(getUserInfo(token, id));
    } else if (calls >= 1) {
      alert("ERROR PLEASE LOGIN AGAIN");
      calls = 0;
      dispatch(clearUser());
      logOut();
    }
  }
};
