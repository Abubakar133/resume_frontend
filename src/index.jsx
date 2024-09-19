import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ToastContainer
         theme="dark"
         position="top-right"
         autoClose={3000}
         closeOnClick
         pauseOnHover={false}
        />
    <App />
  </BrowserRouter>
);

reportWebVitals();
