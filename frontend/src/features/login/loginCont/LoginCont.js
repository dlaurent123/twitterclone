import React from "react";
import birdImg from "../../../images/whitebird.png";
import LoginForm from "../loginForm/LoginForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateModal } from "../../modal/modalSlice";
const LoginCont = () => {
  const dispatch = useDispatch();
  return (
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
              <div onClick={() => dispatch(updateModal())} className="links">
                <span>Sign up for Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCont;
