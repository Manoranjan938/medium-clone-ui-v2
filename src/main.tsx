import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./shared/tailwind.css";
import MainRouter from "./routes/MainRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
);
