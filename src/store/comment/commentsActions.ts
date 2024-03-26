import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { POST_API } from "../../components/helpers/consts";

export const createComment = createAsyncThunk(
  "comments/createComment",
  async ({ comment, id }: { comment: string; id: string }) => {
    const { data } = await axios.post(`${POST_API}/${id}`, comment);
    return data;
  }
);
