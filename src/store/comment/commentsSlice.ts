// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../store";
// import { POST_API } from "../../components/helpers/consts";
// import axios from "axios";

import { createSlice } from "@reduxjs/toolkit";

// // Действие для добавления комментария к посту
// export const addComment = createAsyncThunk(
//   "comments/addComment",
//   async ({
//     postId,
//     comment,
//   }: {
//     postId: number;
//     comment: { commentAuthor: string; comment: string };
//   }) => {
//     const response = await axios.post<Comment>(
//       `${POST_API}/${postId}/comments`,
//       comment
//     );
//     return response.data;
//   }
// );

// interface CommentState {
//   commentsByPostId: { [postId: number]: Comment[] };
// }

// const initialCommentState: CommentState = {
//   commentsByPostId: {},
// };

// const commentSlice = createSlice({
//   name: "comments",
//   initialState: initialCommentState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(addComment.fulfilled, (state, action) => {
//       const { postId, comment } = action.meta.arg; // Correct the payload destructuring
//       if (!state.commentsByPostId[postId]) {
//         state.commentsByPostId[postId] = [];
//       }
//       state.commentsByPostId[postId].push(comment);
//     });
//   },
// });

// export const selectCommentsByPostId = (postId: number) => (state: RootState) =>
//   state.comments.commentsByPostId[postId];

// export default commentSlice.reducer;

// Редьюсер для хранения комментариев
interface CommentState {
  commentsByPostId: { [postId: number]: Comment[] };
}

const initialCommentState: CommentState = {
  commentsByPostId: {},
};

const commentSlice = createSlice({
  name: "comments",
  initialState: initialCommentState,
  reducers: {
    addComment(state, action) {
      const { postId, comment } = action.payload;
      if (!state.commentsByPostId[postId]) {
        state.commentsByPostId[postId] = [];
      }
      state.commentsByPostId[postId].push(comment);
    },
  },
});

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer;
