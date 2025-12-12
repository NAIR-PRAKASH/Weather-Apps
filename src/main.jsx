import React from "react";
import ReactDOM from "react-dom/client";
import{BrowserRouter}from "react-router-dom";
import { UnitProvider } from "./context/UnitContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UnitProvider>
      <BrowserRouter>
      <App/>
      </BrowserRouter>
    </UnitProvider>
  </React.StrictMode>
);
