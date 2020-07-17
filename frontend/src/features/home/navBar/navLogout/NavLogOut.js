import React from "react";
import "./css/navLogOut.css";
import { logOut } from "../../../../util/firebaseFunctions";
import { useSelector, useDispatch } from "react-redux";
import {
  userState,
  clearUser,
} from "../../../loggedInUserInfo/loggedInUserInfoSlice";
import avi from "../../../../images/user.png";
import down from "../../../../images/arrow.png";
const NavLogOut = () => {
  const state = useSelector(userState);
  const dispatch = useDispatch();

  const lo = () => {
    logOut();
    dispatch(clearUser());
  };
  console.log(state.user);

  return (
    <div onClick={lo} className="navLogOut">
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
            <img style={{ height: "20px" }} alt="" src={down} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavLogOut;
