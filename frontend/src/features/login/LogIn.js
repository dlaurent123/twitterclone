import React from "react";
import "./css/login.css";
import LoginCont from "./loginCont/LoginCont";
import Modal from "react-modal";
import ModalPage1 from "../modal/ModalPage1";
import { afterOpenModal, customStyles } from "../modal/helpers/helpers";
import { modalState } from "../modal/modalSlice";
import { useSelector } from "react-redux";

const LogIn = () => {
  const modalIsOpen = useSelector(modalState);

  return (
    <>
      <div className="loginTop">
        <LoginCont />
      </div>
      <div className="signUpDiv">
        <div className="modalDiv">
          <Modal
            ariaHideApp={false}
            ariaModal={true}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <ModalPage1 />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default LogIn;
