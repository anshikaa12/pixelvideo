import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { MobileViewProvider } from "./context/mobileViewContext";
import { createRoot } from "react-dom/client";
import { CategoryFilterProvider } from "./context/filterCategoryContext";
import { LikedVideos } from "./pages";
import { LikedVideoProvider } from "./context/likedVideoContext";
import { WatchLaterProvider } from "./context/watchLaterContext";

// Call make Server
makeServer();
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <WatchLaterProvider>
      <LikedVideoProvider>
        <CategoryFilterProvider>
          <MobileViewProvider>
            <Router>
              <App />
            </Router>
          </MobileViewProvider>
        </CategoryFilterProvider>
      </LikedVideoProvider>
    </WatchLaterProvider>
  </React.StrictMode>
);
