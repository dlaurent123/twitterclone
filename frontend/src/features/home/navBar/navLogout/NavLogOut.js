import React, { useLayoutEffect } from "react";
import { logOut } from "../../../../util/firebaseFunctions";
import { useSelector } from "react-redux";
import { userState } from "../../../loggedInUserInfo/loggedInUserInfoSlice";
import avi from "../../../../images/user.png";
const NavLogOut = () => {
  const state = useSelector(userState);
  const lo = () => {
    logOut();
  };

  useLayoutEffect(() => {}, []);

  console.log(state.user);
  return (
    <div onClick={lo} className="navLogOut">
      <img alt="" src={avi} />
    </div>
  );
};

export default NavLogOut;
