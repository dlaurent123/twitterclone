import React, { useState } from "react";
import "./css/navLogOut.css";
import { useSelector } from "react-redux";
import { userState } from "../../../loggedInUserInfo/loggedInUserInfoSlice";
import avi from "../../../../images/user.png";
import down from "../../../../images/arrow.png";
import LogOutModal from "./logOutModal/LogOutModal";

const NavLogOut = () => {
  const state = useSelector(userState);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <LogOutModal isOpen={isOpen} />
      <div onClick={() => setIsOpen(true)} className="navLogOut">
        <div className="navLogOutTop">
          <div className="navLogOutCont">
            <div className="aviImg">
              <img
                style={{ height: "37px" }}
                alt=""
                src={state.user.avatar ? state.user.avatar : avi}
              />
            </div>
            <div className="uInfo">
              <div>
                <span style={{ fontSize: "15px", fontWeight: "bolder" }}>
                  {state.user.name}
                </span>
                <div>
                  <span
                    style={{
                      fontSize: "15px",
                      color: "rgb(136, 153, 166)",
                    }}
                  >
                    @{state.user.user_name}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img style={{ height: "15px" }} alt="" src={down} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavLogOut;
