import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav">
        <div className="first-nav">
          <img
            src="https://res.cloudinary.com/de5it79dw/image/upload/v1650394802/pixelvideologo_bbmywr.png"
            alt=""
          />
        </div>
        <div className="mid-nav flex-row">
          <ul className="nav-links">
            <Link className="li-link-a" to="/">
              {" "}
              <li className="li-link">Explore</li>
            </Link>
            <Link className="li-link-a" to="/product">
              {" "}
              <li className="li-link">Playlists</li>
            </Link>
          </ul>
        </div>
        <div className="last-nav flex-row">
          <input type="text" className="input-box" placeholder="Search" />
          <ul className="nav-connect nav-links">
            <Link to="/user" className="nav-connect-a li-link-a">
              <li className="connect-link h6-text flex-col-center">
                <i className="fas fa-user  h5-text"></i>
                <p className="h6-text i-link-nav-name">User</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
