import React from "react";
import Modal from "react-modal";
import { signOutStyles } from "../../modal/helpers/helpers";

const TweetOptionsModal = ({ isOpen }) => {
  return (
    <Modal
      contentLabel="Example Modal"
      style={signOutStyles}
      ariaHideApp={false}
      ariaModal={true}
      isOpen={false}
      shouldCloseOnOverlayClick={true}
    />
  );
};

export default TweetOptionsModal;
