import React from "react";
import { logOut } from "../../../../util/firebaseFunctions";

const NavLogOut = () => {
  const lo = () => {
    logOut();
  };
  return (
    <div className="navLogOut">
      <button onClick={lo}>Log Out</button>
    </div>
  );
};

export default NavLogOut;
