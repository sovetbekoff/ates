// // store.ts
// import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
// import userSlice from "./auth/userSlice";
// import postSlice from "./post/postSlice";

// export const store = configureStore({
//   reducer: {
//     users: userSlice,
//     posts: postSlice,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

// store.ts
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./auth/userSlice";
import postSlice from "./post/postSlice";
import { useDispatch } from "react-redux";
import commentsSlice from "./comment/commentsSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
    posts: postSlice,
    comments: commentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
