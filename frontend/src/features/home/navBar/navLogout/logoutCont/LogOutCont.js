import React from "react";
import { useSelector } from "react-redux";
import { userState } from "../../../../loggedInUserInfo/loggedInUserInfoSlice";
import avi from "../../../../../images/user.png";
import down from "../../../../../images/arrow.png";

const LogOutCont = () => {
  const state = useSelector(userState);
  return (
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
  );
};

export default LogOutCont;
