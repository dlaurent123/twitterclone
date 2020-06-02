import React, { useState } from "react";
import cancel from "../../images/cross.png";
import { useDispatch } from "react-redux";
import { updateModal } from "../modal/modalSlice";
import image from "../../images/whitebird.png";
import Input from "../login/input/Input";

const ModalPage2 = () => {
  const dispatch = useDispatch();
  const onSubmit = () => {};
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerItems">
            <div className="space">
              <img
                alt=""
                src={cancel}
                onClick={() => dispatch(updateModal())}
              />
            </div>
            <div className="headerImg">
              <img alt="img" className="birdImg" src={image}></img>
            </div>
            <div className="nextButton">{/* <button>Next</button> */}</div>
          </div>
        </div>
      </div>

      <div className="suForm">
        <div className="suFormCont">
          {/* <h1 style={{ color: "white" }}>
          <span>Create your account</span>
        </h1> */}

          <form onSubmit={onSubmit} className="loginForm">
            <div className="cont1">
              <Input
                value={userName}
                setValue={setUserName}
                spanName={"User Name"}
              />
              <div className="countCont">
                <div className="spaceCont"></div>
                <div className="countDiv">{/* <span>{count}/50</span> */}</div>
              </div>
            </div>
            <div className="cont1">
              <Input
                value={password}
                setValue={setPassword}
                spanName={"Password"}
              />
            </div>
            {/* <div className="linkInsert">
        <span>Use phone instead</span>
      </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalPage2;
