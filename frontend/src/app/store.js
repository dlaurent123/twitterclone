import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import modalIsOpen from "../features/modal/modalSlice";
import page from "../features/page/pageSlice";
import logger from "redux-logger";
const reducer = {
  modalIsOpen,
  page,
};

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
