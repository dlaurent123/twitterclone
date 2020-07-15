import { configureStore } from "@reduxjs/toolkit";
import modalIsOpen from "../features/modal/modalSlice";
import page from "../features/page/pageSlice";
import form from "../features/form/FormSlice";
// import logger from "redux-logger";
import err from "../features/err/errSlice";
import userInfo from "../features/loggedInUserInfo/loggedInUserInfoSlice";

const reducer = {
  modalIsOpen,
  page,
  form,
  err,
  userInfo,
};

export default configureStore({
  reducer,
  // middleware: [...getDefaultMiddleware(), logger],
});
