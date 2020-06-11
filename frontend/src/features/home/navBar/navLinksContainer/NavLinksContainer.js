import React from "react";
import { NavLink } from "react-router-dom";
import birdHome from "../../../../images/whitebird.png";
import HomeLink from "./homeLink/HomeLink";
import ProfileLink from "./profileLink/ProfileLink";

const NavLinksContainer = () => {
  return (
    <div className="navLinksContainer">
      <NavLink to="/home">
        <div className="homeBirdDiv">
          <img className="bird" alt="" src={birdHome} />
        </div>
      </NavLink>
      <div className="restLinks">
        <HomeLink />
        <ProfileLink />
      </div>
      <div className="navLinks"></div>
    </div>
  );
};

export default NavLinksContainer;
