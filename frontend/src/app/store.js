import { configureStore } from "@reduxjs/toolkit";
import modalIsOpen from "../features/modal/modalSlice";
import page from "../features/page/pageSlice";
import form from "../features/form/FormSlice";
// import logger from "redux-logger";

const reducer = {
  modalIsOpen,
  page,
  form,
};

export default configureStore({
  reducer,
  // middleware: [...getDefaultMiddleware(), logger],
});
