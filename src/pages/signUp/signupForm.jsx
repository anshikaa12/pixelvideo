import React from "react";
import { Link } from "react-router-dom";

function SignUpForm() {
  return (
    <div className="flex-col-center">
      <div className="signup">
        <h2 className="main-h2">Sign Up</h2>
        <h4 className="main-h4">
          Fill below form to sign up and enjoy all the benefits in{" "}
          <span className="prime-color-text">PixelVideo</span>
        </h4>
        <form className="inputForm">
          <div className="flex-row input-item">
            <div className="input-item-label">
              <label className="h5-text">First Name : </label>
            </div>
            <div className="input-item-box">
              <input type="text" className="no-border-input input-s" />
            </div>
          </div>
          <div className="flex-row input-item">
            <div className="input-item-label">
              <label className="h5-text">Last Name : </label>
            </div>
            <div className="input-item-box">
              <input type="text" className="no-border-input input-s" />
            </div>
          </div>
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
              <label className="h5-text">Password: </label>
            </div>
            <div className="input-item-box">
              <input type="text" className="no-border-input input-s" />
              <button>
                <i class="fas fa-eye-slash"></i>
              </button>
            </div>
          </div>
          <div className="flex-row input-item">
            <div className="input-item-label">
              <label className="h5-text">Confirm Password : </label>
            </div>
            <div className="input-item-box">
              <input type="text" className="no-border-input input-s" />
              <button>
                <i class="fas fa-eye-slash"></i>
              </button>
            </div>
          </div>
          <button className="small-btn btn-primary">Register</button>
          <div>
            <p className="h5-text">
              Already registered?
              <Link to="/login">
                <span className="switch-span accent-color-text">
                  {" "}
                  Login Here
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
