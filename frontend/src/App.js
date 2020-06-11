import React from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import Home from "./features/home/Home";
import LogIn from "./features/login/LogIn";
import Explore from "./features/explore/Explore";
import Profile from "./features/profile/Profile";
import AuthProvider from "./providers/AuthContext";
import NavBar from "./features/home/navBar/NavBar";
import { AuthRoute, ProtectedRoute } from "./util/routeUtil";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <ProtectedRoute>
          <NavBar />
        </ProtectedRoute>
        <Switch>
          <AuthRoute exact path="/explore">
            <Explore />
          </AuthRoute>

          <AuthRoute path="/login">
            <LogIn />
          </AuthRoute>

          <ProtectedRoute path="/home">
            <Home />
          </ProtectedRoute>

          <ProtectedRoute path="/profile">
            <Profile />
          </ProtectedRoute>

          <AuthRoute path="/">
            <Explore />
          </AuthRoute>
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
