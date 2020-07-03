import React from "react";
import Modal from "react-modal";
import { modalStyles } from "../../modal/helpers/helpers";
import cancel from "../../../images/close1.png";
import "./Css/tweetmodal.css";

const TweetModal = () => {
  return (
    <Modal style={modalStyles} isOpen={true}>
      <div className="tweetCancel">
        <div className="cancelContents">
          <div className="cancelContainer">
            <div className="tweetCancelImgCont">
              <img alt="" src={cancel} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TweetModal;
