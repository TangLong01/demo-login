import React from "react";
import "./styles/global.scss";
import App from "./App";
import reportWebVitals from "./utils/reportWebVitals";
import { createRoot } from "react-dom/client";
import MainLayout from "./layouts/MainLayout";

const element = document.getElementById("root");
const root = createRoot(element!);

root.render(
  <React.StrictMode>
    <MainLayout>
      <App />
    </MainLayout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
