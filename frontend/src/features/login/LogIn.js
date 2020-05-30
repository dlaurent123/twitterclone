import React from "react";
import "./css/login.css";
import birdImg from "../../images/whitebird.png";
import LoginForm from "./loginForm/LoginForm";

const LogIn = () => {
  return (
    <div className="loginTop">
      <div className="loginCont">
        <div className="loginmain">
          <div className="imgDiv">
            <img className="bird" alt="img" src={birdImg}></img>
            <h1 style={{ color: "white" }}>
              <span>Log in to Twitter</span>
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
