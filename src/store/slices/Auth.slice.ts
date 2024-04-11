import { createSlice } from "@reduxjs/toolkit";
import { AuthModel } from "../models/Auth.model";

const initialState: AuthModel = {
  userDetails: {
    access_token: "",
    fullname: "",
    profile_img: "",
    username: "",
  },
};

const authReducers = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loadAuthDetails(state, action) {
      return { ...state, userDetails: action.payload };
    },
  },
});

export default authReducers.reducer;
