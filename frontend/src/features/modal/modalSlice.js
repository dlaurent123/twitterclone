import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modalIsOpen",
  initialState: false,
  reducers: {
    updateModal: (state, action) => {
      return !state;
    },
  },
});

export const modalState = (state) => state.modalIsOpen;
export const { updateModal } = modalSlice.actions;
export default modalSlice.reducer;
