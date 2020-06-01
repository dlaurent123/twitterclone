import React from "react";
import SignUpForm from "../signUp/signUpForm/SignUpForm";
import Modal from "react-modal";
import image from "../../images/whitebird.png";
import { useSelector, useDispatch } from "react-redux";

import { updateModal } from "./modalSlice";
import { modalState } from "./modalSlice";
import { customStyles } from "../signUp/helpers/helpers";

const ModalPage1 = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(modalState);
  console.log(modalIsOpen);
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  const changer = () => {
    dispatch(updateModal());
  };
  return (
    <div className="modalDiv">
      <button onClick={changer}>Open</button>

      <Modal
        ariaHideApp={false}
        ariaModal={true}
        isOpen={true}
        onAfterOpen={afterOpenModal}
        onRequestClose={updateModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="header">
          <div className="headerContainer">
            <div className="headerItems">
              <div className="space"></div>
              <div className="headerImg">
                <img alt="img" className="birdImg" src={image}></img>
              </div>
              <div className="nextButton">
                <button>Next</button>
              </div>
            </div>
          </div>
        </div>

        <div className="suForm">
          <div className="suFormCont">
            <h1 style={{ color: "white" }}>
              <span>Create your account</span>
            </h1>
            <SignUpForm />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalPage1;
