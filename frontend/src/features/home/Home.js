import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../util/apiUrl";
import { AuthContext } from "../../providers/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import {
  userState,
  updateUser,
} from "../loggedInUserInfo/loggedInUserInfoSlice";
import NavBar from "./navBar/NavBar";
import { Switch } from "react-router-dom";
import { ProtectedRoute } from "../../util/routeUtil";
import gif from "../../images/blue.png";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [apiCalls, setApiCalls] = useState(0);
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
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        if (apiCalls > 1) {
          getUserInfo();
        } else {
          alert("ERROR PLEASE REFRESH PAGE");
          setApiCalls(0);
          setIsLoading(false);
        }
      }
    };
    const timer = setTimeout(() => {
      getUserInfo();
    }, 500);
    return () => clearTimeout(timer);
  }, [API, currentUser.id, token, dispatch, apiCalls]);

  console.log(state.user);

  if (isLoading)
    return (
      <div className="loading">
        <img className="bird" alt="" src={gif} />
      </div>
    );

  return <div></div>;
};

export default Home;
