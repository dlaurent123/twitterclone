import { createSlice } from "@reduxjs/toolkit";

export const loggedInUserInfoSlice = createSlice({
  name: "userInfo",
  initialState: { user: null },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = loggedInUserInfoSlice.actions;
export const userState = (state) => state.userInfo;
export default loggedInUserInfoSlice.reducer;
