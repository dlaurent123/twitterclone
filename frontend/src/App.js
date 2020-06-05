import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./features/home/Home";
import LogIn from "./features/login/LogIn";
import Explore from "./features/explore/Explore";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Explore />
        </Route>

        <Route path="/login">
          <LogIn />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Explore />
      </Switch>
    </div>
  );
}

export default App;
