import React from "react";
import "./css/navBar.css";
import birdHome from "../../../images/whitebird.png";
import NavLinksContainer from "./navLinksContainer/NavLinksContainer";
import NavLogOut from "./navLogout/NavLogOut";
import { NavLink } from "react-router-dom";
import Button from "../../login/button/Button";
import TweetModal from "../tweetModal/TweetModal";
import { updateModal } from "../../modal/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { userState } from "../../loggedInUserInfo/loggedInUserInfoSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const state = useSelector(userState);
  const onClick = () => {
    dispatch(updateModal());
  };

  return state.user === null ? null : (
    <>
      <header className="navHeader">
        <div className="navMain">
          <div className="navContentsContainer">
            <div className="navContents">
              <NavLink to="/home">
                <div className="homeBirdDiv">
                  <img className="bird" alt="" src={birdHome} />
                </div>
              </NavLink>
              <NavLinksContainer />
              <Button func={onClick} bDivId={"tweet"} text={"Tweet"} />
              <NavLogOut />
            </div>
          </div>
        </div>
      </header>
      <TweetModal />
    </>
  );
};

export default NavBar;
