import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./shared/tailwind.css";
import MainRouter from "./routes/MainRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MainRouter />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
