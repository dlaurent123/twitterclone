import React from "react";
import "./css/login.css";
import LoginCont from "./loginCont/LoginCont";
import Modal from "react-modal";
import ModalPage1 from "../modal/ModalPage1";
import ModalPage2 from "../modal/ModalPage2";
import { afterOpenModal, customStyles } from "../modal/helpers/helpers";
import { modalState } from "../modal/modalSlice";
import { useSelector } from "react-redux";
import { pageState } from "../page/pageSlice";

const LogIn = () => {
  const modalIsOpen = useSelector(modalState);
  const page = useSelector(pageState);

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
            {page === 1 ? <ModalPage1 /> : <ModalPage2 />}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default LogIn;
