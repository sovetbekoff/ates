import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface RegisterUserPayload {
  username: string;
  password: string;
}

type IInitstate = {
  loading: boolean;
  error: boolean;
  users: any;
};

const INIT_STATE: IInitstate = {
  loading: false,
  error: false,
  users: [],
};

export const registerUser = createAsyncThunk<
  void,
  { username: string; password: string }
>("auth/registerUser", async (username, password) => {
  await axios.post("http://localhost:8000/users", { username, password });
});

const authSlice = createSlice({
  name: "auth",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        (state.loading = false), (state.users = action.payload);
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default authSlice.reducer;
