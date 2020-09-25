import { createSlice } from "@reduxjs/toolkit";

export const usersPostsSlice = createSlice({
  name: "usersPosts",
  initialState: [],
  reducers: {
    setPosts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPosts } = usersPostsSlice.actions;
export const { usersPostsState } = (state) => state.usersPosts;
export default usersPostsSlice.reducer;
