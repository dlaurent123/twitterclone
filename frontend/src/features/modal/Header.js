import React from "react";
import image from "../../images/whitebird.png";
import { useDispatch } from "react-redux";
import { updateModal } from "../modal/modalSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <button onClick={() => dispatch(updateModal())}>Close</button>
      <div className="headerContainer">
        <div className="headerItems">
          <div className="space"></div>
          <div className="headerImg">
            <img alt="img" className="birdImg" src={image}></img>
          </div>
          <div className="nextButton">
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
