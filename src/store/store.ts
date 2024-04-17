import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./slices/global";
import authReducer from "./slices/Auth.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    global: globalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
