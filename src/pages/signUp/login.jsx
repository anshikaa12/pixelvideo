import React from "react";
import { Link } from "react-router-dom";
import { Footer, Nav } from "../../components";

function Login() {
  return (
    <div>
      <Nav />
      <div className="flex-col-center">
        <div className="signup">
          <h2 className="main-h2">Login</h2>
          <form className="inputForm">
            <div className="flex-row input-item">
              <div className="input-item-label">
                <label className="h5-text">Email : </label>
              </div>
              <div className="input-item-box">
                <input type="text" className="no-border-input input-s" />
              </div>
            </div>
            <div className="flex-row input-item">
              <div className="input-item-label">
                <label className="h5-text">Password : </label>
              </div>
              <div className="input-item-box">
                <input type="text" className="no-border-input input-s" />
              </div>
            </div>
            <button className="small-btn btn-primary">Register</button>
            <div>
              <p className="h5-text">
                Don't have an account?{" "}
                <Link to="/signup">
                  <span className="switch-span accent-color-text">
                    Signup Here
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
