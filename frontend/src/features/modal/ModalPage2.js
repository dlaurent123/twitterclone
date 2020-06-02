import React, { useState } from "react";
import back from "../../images/left-arrow.png";
import { useDispatch } from "react-redux";
import { updateModal } from "../modal/modalSlice";
import image from "../../images/whitebird.png";
import Input from "../login/input/Input";
import { changePage } from "../page/pageSlice";
import Button from "../login/button/Button";

const ModalPage2 = () => {
  const dispatch = useDispatch();
  const onSubmit = () => {};
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const close = () => {
    dispatch(changePage(1));
  };

  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerItems">
            <div id="space" className="space">
              <img alt="" src={back} onClick={close} />
            </div>

            <div id="stepsDiv" className="nextButton">
              <div id="h1" className="headerImg">
                <h1 style={{ color: "white" }}>
                  <span>Step 2 of 2</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="suForm">
        <div className="suFormCont">
          <h1 style={{ color: "white" }}>
            <span>Create your account</span>
          </h1>
          <form onSubmit={onSubmit} className="loginForm">
            <div className="form2Cont">
              <div className="cont1">
                <Input
                  value={userName}
                  setValue={setUserName}
                  spanName={"User Name"}
                />
                <div className="countCont">
                  <div className="spaceCont"></div>
                  <div className="countDiv">
                    {/* <span>{count}/50</span> */}
                  </div>
                </div>
              </div>
              <div className="cont1">
                <Input
                  value={password}
                  setValue={setPassword}
                  spanName={"Password"}
                />
              </div>
              <span className="all">
                <div>
                  <span className="white">By signing up, you agree to the</span>
                </div>
                <a href="https://twitter.com/tos">
                  <span className="blue"> Terms of Service</span>
                </a>
                <div>
                  <span className="white">and</span>
                </div>
                <a href="https://twitter.com/privacy">
                  <span className="blue">Privacy Policy</span>
                </a>
                <div>
                  <span className="white">, including </span>
                </div>
                <a href="https://support.twitter.com/articles/20170514">
                  <span className="blue">Cookie Use</span>
                </a>
                <div>
                  <span className="white">
                    . Others will be able to find you by email or phone number
                    when
                  </span>
                </div>
                <div>
                  <span className="white">provided · </span>
                </div>
                <div>
                  <span className="blue"> Privacy Options</span>
                </div>
              </span>
              <Button
                buttonId={"page2Button"}
                bDivId={"bDivId"}
                text={"Sign up"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalPage2;
