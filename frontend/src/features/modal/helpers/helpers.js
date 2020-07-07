export const afterOpenModal = () => {
  // references are now sync'd and can be accessed.
};

export const changer = (setModal, val) => {
  setModal(val);
};

export const customStyles = {
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

export const modalStyles = {
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    border: "unset",
    padding: "unset",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgb(21, 32, 43)",
    minHeight: "295px",
    borderRadius: "14px 14px 14px 14px",
    maxWidth: "80vw",
    maxHeight: "90vh",
    // height: "650px",
    minWidth: " 600px",
    flexShrink: "1",
    display: "flex",
    flexDirection: "column",
  },
  overlay: {
    backgroundColor: "rgba(110, 118, 125, 0.4)",
  },
};
