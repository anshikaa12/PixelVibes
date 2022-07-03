import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="main-sec">
      <div className="logo-sec">
        <img
          src="https://res.cloudinary.com/de5it79dw/image/upload/v1656858076/Pixelion_6_uqhbjs.png"
          alt="text"
        />
      </div>
      <div className="content-box">
        <div className="image-sec">
          <img
            src="https://res.cloudinary.com/de5it79dw/image/upload/v1656853259/people-chatting-on-social-media-2890206-2407183_f8leeq.png"
            alt="text"
          />
        </div>
        <div className="signup-box flex-col-center">
          <div className="signup flex-col-center">
            <h2 className="main-h2">Sign In</h2>
            <h5 className="main-h5 login-text">
              Fill below form to sign up and enjoy all the benefits in{" "}
              <span className="accent-color-text">PixelVibes</span>
            </h5>
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
                  <label className="h5-text">Password: </label>
                </div>
                <div className="input-item-box">
                  <input type="text" className="no-border-input input-s" />

                  <button>
                    <i className="fas fa-eye-slash"></i>
                  </button>
                </div>
              </div>

              <button className="small-btn btn-secondary">Sign in</button>
              <div>
                <p className="h5-text">Don't have an account?
                <Link to="/Signup">
                <span className="switch-span accent-color-text">
                  {" "}
                  SignUp Here
                </span>
              </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
