import React, { useLayoutEffect } from "react";
import { logOut } from "../../../../util/firebaseFunctions";
import { useSelector, useDispatch } from "react-redux";
import {
  userState,
  clearUser,
} from "../../../loggedInUserInfo/loggedInUserInfoSlice";
import avi from "../../../../images/user.png";
const NavLogOut = () => {
  const state = useSelector(userState);
  const dispatch = useDispatch();
  const lo = () => {
    logOut();
    dispatch(clearUser());
  };

  useLayoutEffect(() => {}, []);

  console.log(state.user);
  return (
    <div onClick={lo} className="navLogOut">
      <img style={{ height: "20px" }} alt="" src={avi} />
    </div>
  );
};

export default NavLogOut;
