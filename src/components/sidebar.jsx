import React from "react";
import { useMobileView } from "../context/mobileViewContext";

function Sidebar() {
  const { toggleState, toggleReducer } = useMobileView();
  return (
    <div
      className={
        toggleState.mobileViewActive === false
          ? "vid-sidebar"
          : "vid-sidebar sidebar-active "
      }
    >
      <ul className="sidebar-list flex-col-center">
        <li className="sidebar-item">
          <i className="fas fa-home"></i>
          <p className="foot-p">Home</p>
        </li>
        <li className="sidebar-item">
          <i className="far fa-compass"></i>
          <p className="foot-p">Explore</p>
        </li>
        <li className="sidebar-item">
          <i className="fas fa-folder-plus"></i>
          <p className="foot-p">Playlists</p>
        </li>
        <li className="sidebar-item">
          <i className="fas fa-thumbs-up"></i>
          <p className="foot-p">Liked</p>
        </li>
        <li className="sidebar-item">
          <i className="fas fa-bookmark"></i>
          <p className="foot-p">Watch Later</p>
        </li>
        <li className="sidebar-item">
          <i className="fas fa-history"></i>
          <p className="foot-p">History</p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
