import React from "react";
import { NavLink } from "react-router-dom";
import profileImg from "../../../../../images/profilewhite.png";

const ProfileLink = () => {
  return (
    <NavLink activeClassName="navy" to="/profile">
      <div className="linkItem">
        <div className="linkContainer">
          <div className="homeImg">
            <img id="profileImg" className="bird" alt="" src={profileImg} />
          </div>
          <div className="spanHolder">
            <span>Profile</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProfileLink;
