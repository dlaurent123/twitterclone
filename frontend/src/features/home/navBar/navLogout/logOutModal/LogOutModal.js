import React from "react";
import Modal from "react-modal";
import { signOutStyles } from "../../../../modal/helpers/helpers";
import { logOut } from "../../../../../util/firebaseFunctions";
import {
  clearUser,
  userState,
} from "../../../../loggedInUserInfo/loggedInUserInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import avi from "../../../../../images/user.png";
import check from "../../../../../images/tick.png";
import "../css/navLogOut.css";

const LogOutModal = ({ isOpen, setIsOpen }) => {
  const state = useSelector(userState);
  const dispatch = useDispatch();
  const lo = () => {
    logOut();
    dispatch(clearUser());
  };
  return (
    <Modal
      ariaHideApp={false}
      ariaModal={true}
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => setIsOpen(false)}
      style={signOutStyles}
      contentLabel="Example Modal"
    >
      <div id="navLogOutCont" className="navLogOutCont">
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
        <div
          style={{ display: " flex", alignContent: "center", padding: "5px" }}
        >
          <img style={{ height: "17px" }} alt="" src={check} />
        </div>
      </div>

      <div>
        <div
          className="logOutSection"
          onClick={lo}
          style={{
            padding: " 15px",
            borderBottomStyle: "solid",
            borderBottomColor: "#38444d",
            borderBottomWidth: "thin",
          }}
        >
          <button onClick={lo}>lo</button>
          <span style={{ fontSize: "15px", fontWeight: "500" }}>
            Log out @{state.user.user_name}
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default LogOutModal;
