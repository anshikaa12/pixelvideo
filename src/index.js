import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { MobileViewProvider } from "./context/mobileViewContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <MobileViewProvider>
      <Router>
        <App />
      </Router>
    </MobileViewProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
