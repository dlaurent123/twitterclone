import React, { useContext, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../../util/apiUrl";
import { AuthContext } from "../../providers/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import {
  userState,
  updateUser,
} from "../loggedInUserInfo/loggedInUserInfoSlice";

const Home = () => {
  const API = apiUrl();
  const { currentUser, token } = useContext(AuthContext);
  const state = useSelector(userState);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `${API}/api/users/${currentUser.id}`,
          headers: {
            authToken: token,
          },
        });
        dispatch(updateUser(res.data.user));
        debugger;
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, [API, currentUser.id, token, dispatch]);

  return (
    <div>
      <h1>{state.user ? state.user.user_name : null}</h1>
    </div>
  );
};

export default Home;
