import React from "react";
import { Link } from "react-router-dom";
import { useMobileView } from "../context/mobileViewContext";

function Sidebar() {
  const { toggleState } = useMobileView();
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
          <Link to="/">
            <i className="fas fa-home"></i>
            <p className="foot-p">Home</p>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/videolisting">
            <i className="far fa-compass"></i>
            <p className="foot-p">Explore</p>
          </Link>
        </li>
        <Link to="/playlist">
          <li className="sidebar-item">
            <i className="fas fa-folder-plus"></i>
            <p className="foot-p">Playlists</p>
          </li>
        </Link>
        <Link to="/likedvideos">
          <li className="sidebar-item">
            <i className="fas fa-thumbs-up"></i>
            <p className="foot-p">Liked</p>
          </li>
        </Link>
        <Link to="/watchlatervideos">
          <li className="sidebar-item">
            <i className="fas fa-bookmark"></i>
            <p className="foot-p">Watch Later</p>
          </li>
        </Link>
        <Link to="/history">
          <li className="sidebar-item">
            <i className="fas fa-history"></i>
            <p className="foot-p">History</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
