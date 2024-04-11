import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ApiStatusModel, GlobalModel } from "../models/Global.model";

const initialState: GlobalModel = {
  apiStatus: {
    error: "",
    isError: false,
    loading: false,
  },
};

const globalReducer = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    updateApiStatus(state, action: PayloadAction<ApiStatusModel>) {
      return { ...state, apiStatus: action.payload };
    },
  },
});

export const { updateApiStatus } = globalReducer.actions;

export default globalReducer.reducer;
