import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./shared/tailwind.css";
import MainRouter from "./routes/MainRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MainRouter />
    </Provider>
  </React.StrictMode>,
);
