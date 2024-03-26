import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export interface Post {
  id: number;
  author: string;
  image: string;
  description: string;
  time: string;
  location: string;
  comments?: Comment[];
}

interface CurrPost {
  author: string;
  id: string | number;
  description: string;
  time: string;
  location: string;
  image: string;
}
interface Comment {
  id: string;
  commentAuthor: string;
  comment: string;
}
interface PostState {
  posts: Post[];
  status: "idle" | "loading" | "failed";
  currentPost: null | CurrPost;
}

const initialState: PostState = {
  posts: [],
  status: "idle",
  currentPost: null,
};

const POST_API = "http://localhost:8001/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get<Post[]>("http://localhost:8001/posts");
  return response.data;
});

export const createPost = createAsyncThunk(
  "posts/createPost",
  async (postData: Omit<Post, "id">) => {
    const response = await axios.post<Post>(
      "http://localhost:8001/posts",
      postData
    );
    return response.data;
  }
);

export const updatePost = createAsyncThunk(
  "posts/updatePost",
  async (postData: Post) => {
    const response = await axios.put<Post>(
      `http://localhost:8001/posts/${postData.id}`,
      postData
    );
    return response.data;
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (postId: number) => {
    await axios.delete(`http://localhost:8001/posts/${postId}`);
    return postId;
  }
);

export const getCurrentPost = createAsyncThunk(
  "users/getCurrentUser",
  async (id: number | string) => {
    const { data } = await axios.get(`${POST_API}/${id}`);
    return data;
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const updatedPost = action.payload;
        const existingPostIndex = state.posts.findIndex(
          (post) => post.id === updatedPost.id
        );
        if (existingPostIndex !== -1) {
          state.posts[existingPostIndex] = updatedPost;
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        const postId = action.payload;
        state.posts = state.posts.filter((post) => post.id !== postId);
      })
      .addCase(getCurrentPost.fulfilled, (state, action) => {
        state.currentPost = action.payload;
      });
  },
});

export const selectAllPosts = (state: RootState) => state.posts.posts;

export default postSlice.reducer;
