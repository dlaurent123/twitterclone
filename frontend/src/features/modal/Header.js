import React from "react";
import image from "../../images/whitebird.png";
import { useDispatch } from "react-redux";
import { updateModal } from "../modal/modalSlice";
import { changePage } from "../page/pageSlice";
import cancel from "../../images/cross.png";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerItems">
          <div className="space">
            <img alt="" src={cancel} onClick={() => dispatch(updateModal())} />
          </div>
          <div className="headerImg">
            <img alt="img" className="birdImg" src={image}></img>
          </div>
          <div className="nextButton">
            <button onClick={() => dispatch(changePage(2))}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
