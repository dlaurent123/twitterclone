import React from "react";
import "./css/explore.css";
import Button from "../login/button/Button";
import settings from "../../images/settings.png";
import Input from "../login/input/Input";
import search from "../../images/search.png";

const Explore = () => {
  return (
    <div className="exploreMain">
      <header>
        <div className="head">
          <div className="headContainer">
            {/* contents start */}
            <div className="headContents">
              <div className="search">
                {/* <div>
                  <img alt="" src={search} />
                </div> */}
                <Input
                  imgDivId={"searchImgDiv"}
                  src={search}
                  containerId={"searcInputCont"}
                  id={"searchInput"}
                  placeholder={"Search Twitter"}
                  divId={"searchDiv"}
                />
              </div>

              <div className="headButts">
                <Button
                  bDivId={"exploreLogIn"}
                  buttonId={"exploreLogIn"}
                  text={"Log in"}
                />
                <Button
                  bDivId={"exploreSignUp"}
                  buttonId={"exploreSignUp"}
                  text={"Sign up"}
                />
                <div className="settings">
                  <img alt="" src={settings} />
                </div>
              </div>
            </div>
            {/* contents end */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Explore;
