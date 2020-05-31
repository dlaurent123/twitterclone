import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import modalIsOpen from "../features/modal/modalSlice";
import logger from "redux-logger";
const reducer = {
  modalIsOpen,
};

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), logger],
});
