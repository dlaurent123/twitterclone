import React from "react";
import { NavLink } from "react-router-dom";

const ProfileLink = () => {
  return (
    <NavLink activeClassName="navy" to="/profile">
      <div className="linkItem">
        <div className="linkContainer">
          <div className="homeImg">
            <img className="bird" alt="" />
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
