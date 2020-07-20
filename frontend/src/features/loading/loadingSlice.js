import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "isLoading",
  initialState: true,
  reducers: {
    updateIsLoading: (state, action) => {
      return action.payload;
    },
  },
});

export const loadingState = (state) => state.isLoading;
export const { updateIsLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
