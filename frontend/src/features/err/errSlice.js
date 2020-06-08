import { createSlice } from "@reduxjs/toolkit";

export const errSlice = createSlice({
  name: "err",
  initialState: null,
  reducers: {
    setErr: (state, action) => {
      return action.payload;
    },
    clearErr: (state, action) => {
      return null;
    },
  },
});

export const { setErr, clearErr } = errSlice.actions;
export const errState = (state) => state.err;

export default errSlice.reducer;
