import { createSlice } from "@reduxjs/toolkit";

export const FormSlice = createSlice({
  name: "form",
  initialState: {},
  reducers: {
    updateForm: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearForm: (state, action) => {
      return {};
    },
  },
});

export const formState = (state) => state.form;
export const { updateForm, clearForm } = FormSlice.actions;
export default FormSlice.reducer;
