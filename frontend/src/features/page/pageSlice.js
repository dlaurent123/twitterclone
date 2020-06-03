import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: 1,
  reducers: {
    changePage: (state, action) => {
      return action.payload;
    },
  },
});

export const pageState = (state) => state.page;
export const { changePage } = pageSlice.actions;
export default pageSlice.reducer;
