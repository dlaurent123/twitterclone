import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    usersPosts: [],
    allPosts: [],
  },
  reducers: {
    setUsersPosts: (state, action) => {
      state.usersPosts = action.payload;
    },
  },
});

export const { setUsersPosts } = postsSlice.actions;
export const { usersPostsState } = (state) => state.posts;
export default postsSlice.reducer;
