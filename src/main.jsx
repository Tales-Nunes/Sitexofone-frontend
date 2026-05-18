import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
  </BrowserRouter>
  </React.StrictMode>
);
