import React from "react";
import home from "../../../../../images/pets-icons.png";
import { NavLink } from "react-router-dom";

const HomeLink = () => {
  return (
    <NavLink activeClassName="navy" to="/home">
      <div className="linkItem">
        <div className="linkContainer">
          <div className="homeImg">
            <img className="bird" alt="" src={home} />
          </div>
          <div className="spanHolder">
            <span>Home</span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default HomeLink;
