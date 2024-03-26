// userSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import { API } from "../../components/helpers/consts";

export interface User {
  id: number;
  name: string;
  password: string;
  image: string;
}

interface UserState {
  users: User[];
  loading: boolean;
  loggedInUser: User | null;
  currentUser: null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  loggedInUser: JSON.parse(localStorage.getItem("user") || "{}"),
  currentUser: null,
};
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const { data } = await axios.get<User[]>(API);
  return data;
});

export const createUser = createAsyncThunk(
  "users/createUser",
  async (user: User) => {
    await axios.post(API, user);

    let usersData = {
      userId: user.id,
      userName: user.name,
      userImg: user.image,
    };

    localStorage.setItem("user", JSON.stringify(usersData));
    return user;
  }
);

export const getUsers = createAsyncThunk(
  "users/getUsers",

  async () => {
    const res = await axios.get(API);
    console.log(res.data, "is re");

    return res.data;
  }
);

export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUser",
  async (id: number | string) => {
    const { data } = await axios.get(`${API}/${id}`);
    return data;
  }
);
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<User>) {
      const { name, image, id } = action.payload;
      state.loggedInUser = { ...action.payload };
      localStorage.setItem("user", JSON.stringify({ id, name, image }));
    },
    logoutUser(state) {
      state.loggedInUser = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      });
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
