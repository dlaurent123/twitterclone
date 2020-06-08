import React from "react";
import "./css/explore.css";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { modalState } from "../modal/modalSlice";
import ModalPage1 from "../modal/ModalPage1";
import ModalPage2 from "../modal/ModalPage2";
import { afterOpenModal, customStyles } from "../modal/helpers/helpers";
import { pageState } from "../page/pageSlice";
import Head from "./head/Head";
import Main from "./main/Main";

const Explore = () => {
  const modalIsOpen = useSelector(modalState);
  const page = useSelector(pageState);
  return (
    <>
      <div className="exploreMain">
        <Head />
        <Main />
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

export default Explore;
