import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import usersReducer from "./usersSlice";
import postsSlice from "./postsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    users: usersReducer,
    posts: postsSlice,
  },
});

export default store;
