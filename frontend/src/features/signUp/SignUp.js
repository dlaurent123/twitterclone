import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { updateModal } from "../modal/modalSlice";
import { modalState } from "../modal/modalSlice";
import "./css/modal.css";
import image from "../../images/whitebird.png";

const SignUp = () => {
  // const [modalIsOpen, setModalIsOpen] = useState(true);
  // const openModal = () => setModalIsOpen(true);
  // const closeModal = () => setModalIsOpen(false);
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(modalState);
  console.log(modalIsOpen);
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      border: "unset",
      padding: "unset",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgb(21, 32, 43)",
      minHeight: "400px",
      borderRadius: "14px 14px 14px 14px",
      maxWidth: "80vw",
      maxHeight: "90vh",
      height: "650px",
      minWidth: " 600px",
      flexShrink: "1",
    },
    overlay: {
      backgroundColor: "rgba(110, 118, 125, 0.4)",
    },
  };
  const changer = () => {
    dispatch(updateModal());
  };
  return (
    <div className="signUpDiv">
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
                  <img className="birdImg" src={image}></img>
                </div>
                <div className="nextButton">
                  <button>Next</button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SignUp;
