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
    setAllPosts: (state, action) => {
      state.allPosts = action.payload;
    },
    receiveUserPost: (state, action) => {
      state.allPosts.unshift(action.payload);
      state.usersPosts.unshift(action.payload);
    },
  },
});

export const {
  setUsersPosts,
  setAllPosts,
  receiveUserPost,
} = postsSlice.actions;
export const { usersPostsState } = (state) => state.posts;
export default postsSlice.reducer;
