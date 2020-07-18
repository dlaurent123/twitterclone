import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../../util/apiUrl";
import { AuthContext } from "../../providers/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import {
  userState,
  updateUser,
} from "../loggedInUserInfo/loggedInUserInfoSlice";
import gif from "../../images/blue.png";

let calls = 0;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
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
        console.log("hello");
        if (calls === 0) {
          calls += 1;
          console.log("here");
          getUserInfo();
        } else if (calls >= 1) {
          alert("ERROR PLEASE REFRESH PAGE");
          calls = 0;
          setIsLoading(false);
        }
      }
    };
    const timer = setTimeout(() => {
      getUserInfo();
    }, 500);
    return () => clearTimeout(timer);
  }, [API, currentUser.id, token, dispatch]);

  if (isLoading)
    return (
      <div className="loading">
        <img id="loadBird" alt="" src={gif} />
      </div>
    );

  return <div></div>;
};

export default Home;
