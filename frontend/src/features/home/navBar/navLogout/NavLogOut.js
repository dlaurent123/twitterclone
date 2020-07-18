import React, { useState } from "react";
import "./css/navLogOut.css";
import LogOutModal from "./logOutModal/LogOutModal";
import LogOutCont from "./logoutCont/LogOutCont";

const NavLogOut = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <LogOutModal setIsOpen={setIsOpen} isOpen={isOpen} />
      <div onClick={() => setIsOpen(true)} className="navLogOut">
        <div className="navLogOutTop">
          <LogOutCont />
        </div>
      </div>
    </>
  );
};

export default NavLogOut;
