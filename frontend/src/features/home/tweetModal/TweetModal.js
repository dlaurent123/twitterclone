import React, { useState } from "react";
import Modal from "react-modal";
import { modalStyles } from "../../modal/helpers/helpers";
import cancel from "../../../images/close1.png";
import TweetBody from "./tweetBody/TweetBody";
import "./Css/tweetmodal.css";
import { useSelector, useDispatch } from "react-redux";
import { updateModal, modalState } from "../../modal/modalSlice";

const TweetModal = () => {
  const isOpen = useSelector(modalState);
  const dispatch = useDispatch();
  return (
    <Modal ariaHideApp={false} style={modalStyles} isOpen={isOpen}>
      <div onClick={(e) => dispatch(updateModal())} className="tweetCancel">
        <div className="cancelContents">
          <div className="cancelContainer">
            <div className="tweetCancelImgCont">
              <img alt="" src={cancel} />
            </div>
          </div>
        </div>
      </div>
      <TweetBody />
    </Modal>
  );
};

export default TweetModal;
