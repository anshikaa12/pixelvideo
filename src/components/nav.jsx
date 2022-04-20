import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav">
        <div className="first-nav">
          <img
            src="https://res.cloudinary.com/de5it79dw/image/upload/v1650394802/pixelvideologo_bbmywr.png"
            alt="text"
          />
        </div>
        <div className="mid-nav flex-row">
          <ul className="nav-links">
            <NavLink className="li-link-a" to="/">
              {" "}
              <li className="li-link">Explore</li>
            </NavLink>
            <NavLink className="li-link-a" to="/product">
              {" "}
              <li className="li-link">Playlists</li>
            </NavLink>
          </ul>
        </div>
        <div className="last-nav flex-row">
          <input type="text" className="input-box" placeholder="Search" />
          <ul className="nav-connect nav-links">
            <NavLink to="/user" className="nav-connect-a li-link-a">
              <li className="connect-link h6-text flex-col-center">
                <i className="fas fa-user  h5-text"></i>
                <p className="h6-text i-link-nav-name">User</p>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
