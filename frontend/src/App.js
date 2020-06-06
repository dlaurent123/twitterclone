import React from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import Home from "./features/home/Home";
import LogIn from "./features/login/LogIn";
import Explore from "./features/explore/Explore";
import AuthProvider from "./providers/AuthContext";
import { AuthRoute, ProtectedRoute } from "./util/routeUtil";

function App() {
  return (
    <AuthProvider>
      <div className="App">
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

          <Explore />
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
