import React, { useEffect, useContext } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { Switch } from "react-router-dom";
import Home from "./features/home/Home";
import LogIn from "./features/login/LogIn";
import Explore from "./features/explore/Explore";
import Profile from "./features/profile/Profile";
import { AuthContext } from "./providers/AuthContext";
import NavBar from "./features/home/navBar/NavBar";
import { AuthRoute, ProtectedRoute } from "./util/routeUtil";
import { apiUrl } from "./util/apiUrl";
import {
  updateUser,
  clearUser,
} from "./features/loggedInUserInfo/loggedInUserInfoSlice";
import axios from "axios";
import { logOut } from "./util/firebaseFunctions";
import Search from "./features/search/Search";

let calls = 0;
const App = () => {
  const API = apiUrl();
  const { currentUser, token } = useContext(AuthContext);

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
      } catch (error) {
        if (calls === 0) {
          calls += 1;
          getUserInfo();
        } else if (calls >= 1) {
          alert("ERROR PLEASE LOGIN AGAIN");
          calls = 0;
          dispatch(clearUser());
          logOut();
        }
      }
    };
    const timer = setTimeout(() => {
      if (currentUser !== null) {
        getUserInfo();
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [API, token, dispatch, currentUser]);

  return (
    <div className="App">
      <Switch>
        <AuthRoute exact path="/">
          <Explore />
        </AuthRoute>

        <AuthRoute exact path="/explore">
          <Explore />
        </AuthRoute>

        <AuthRoute exact path="/login">
          <LogIn />
        </AuthRoute>

        <ProtectedRoute exact path="/home">
          <div className="signedInDiv">
            <NavBar />
            <main className="mainDivv">
              <Home />
            </main>
          </div>
        </ProtectedRoute>

        <ProtectedRoute exact path="/profile">
          <div className="signedInDiv">
            <NavBar />
            <main className="mainDivv">
              <Profile />
            </main>
          </div>
        </ProtectedRoute>

        <ProtectedRoute exact path="/search/:hashtag">
          <div className="signedInDiv">
            <NavBar />
            <main className="mainDivv">
              <Search />
            </main>
          </div>
        </ProtectedRoute>

        <AuthRoute path="*">
          <Explore />
        </AuthRoute>
      </Switch>
    </div>
  );
};

export default App;
