import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { MobileViewProvider } from "./context/mobileViewContext";
import { createRoot } from "react-dom/client";
import { CategoryFilterProvider } from "./context/filterCategoryContext";
import { LikedVideoProvider } from "./context/likedVideoContext";
import { WatchLaterProvider } from "./context/watchLaterContext";
import { HistoryProvider } from "./context/historyContext";
import { SingleVidProvider } from "./context/singleVidContext";
import { PlaylistProvider } from "./context/playlistContext";
// Call make Server
makeServer();
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <PlaylistProvider>
      <SingleVidProvider>
        <HistoryProvider>
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
        </HistoryProvider>
      </SingleVidProvider>
    </PlaylistProvider>
  </React.StrictMode>
);
