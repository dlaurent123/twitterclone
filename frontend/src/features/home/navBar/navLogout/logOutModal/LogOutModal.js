import React from "react";
import Modal from "react-modal";
import { signOutStyles } from "../../../../modal/helpers/helpers";
import { logOut } from "../../../../../util/firebaseFunctions";
import { clearUser } from "../../../../loggedInUserInfo/loggedInUserInfoSlice";
import { useDispatch } from "react-redux";
const LogOutModal = ({ isOpen }) => {
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
      // onAfterOpen={afterOpenModal}
      style={signOutStyles}
      contentLabel="Example Modal"
    >
      <button onClick={lo}>Logout</button>
    </Modal>
  );
};

export default LogOutModal;
