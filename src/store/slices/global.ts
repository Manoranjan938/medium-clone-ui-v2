import { createSlice } from "@reduxjs/toolkit";
import { GlobalModel } from "../models/Global.model";

const initialState: GlobalModel = {
  error: "",
  isError: false,
  loading: false,
};

const globalReducer = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    loading(state, action) {
      return { ...state, loading: action.payload };
    },
    error(state, action) {
      return { ...state, isError: action.payload, error: action.payload };
    },
  },
});

export const { error, loading } = globalReducer.actions;

export default globalReducer.reducer;
