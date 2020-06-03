import React from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../page/pageSlice";
import back from "../../../images/left-arrow.png";

const Header2 = () => {
  const dispatch = useDispatch();
  const close = () => {
    dispatch(changePage(1));
  };

  return (
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
  );
};

export default Header2;
