import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import DarkGlobe from "./DarkGlobe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <App />
      <DarkGlobe />
    </div>
  </React.StrictMode>
);
