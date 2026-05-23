import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Register the <image-slot> web component (vanilla, side-effect import)
import "./web-components/image-slot.js";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
