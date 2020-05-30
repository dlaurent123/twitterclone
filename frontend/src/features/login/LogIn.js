import React from "react";
import "./css/login.css";
import birdImg from "../../images/whitebird.png";
import LoginForm from "./loginForm/LoginForm";
import { Link } from "react-router-dom";

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
            <div className="linksDivCont">
              <div className="linksDiv">
                <Link className="links" to="/">
                  <span>Forgot password?</span>
                </Link>
                <span className="dot">•</span>
                <Link className="links" to="/signup">
                  <span>Sign up for Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
