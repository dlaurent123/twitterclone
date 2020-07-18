import React from "react";
// import { NavLink } from "react-router-dom";
import HomeLink from "./homeLink/HomeLink";
import ProfileLink from "./profileLink/ProfileLink";
// import Button from "../../../login/button/Button";
import "../css/navBar.css";

const NavLinksContainer = () => {
  return (
    <div className="navLinksContainer">
      <div className="restLinks">
        <HomeLink />
        <ProfileLink />
      </div>
      <div className="navLinks"></div>
    </div>
  );
};

export default NavLinksContainer;
