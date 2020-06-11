import React from "react";
import "./css/navBar.css";
import NavLinksContainer from "./navLinksContainer/NavLinksContainer";
import NavLogOut from "./navLogout/NavLogOut";

const NavBar = () => {
  return (
    <header className="navHeader">
      <div className="navMain">
        <div className="navContentsContainer">
          <div className="navContents">
            <NavLinksContainer />
            <NavLogOut />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
