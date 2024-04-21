import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthModel, UserDetails } from "../models/Auth.model";

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
    loadAuthDetails(state, action: PayloadAction<UserDetails>) {
      return { ...state, userDetails: action.payload };
    },
  },
});

export const { loadAuthDetails } = authReducers.actions;

export default authReducers.reducer;
