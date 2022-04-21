import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { MobileViewProvider } from "./context/mobileViewContext";
import { createRoot } from "react-dom/client";

// Call make Server
makeServer();
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <MobileViewProvider>
      <Router>
        <App />
      </Router>
    </MobileViewProvider>
  </React.StrictMode>
);
