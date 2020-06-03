import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./features/home/Home";
import LogIn from "./features/login/LogIn";
// import SignUp from "./features/signUp/SignUp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        {/* <Route path="/signup">
          <SignUp />
        </Route> */}
        <Home />
      </Switch>
    </div>
  );
}

export default App;
