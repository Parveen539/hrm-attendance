import "./assets/css/all.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import logo from "./assets/img/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
export const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="account-page">
      <div className="main-wrapper">
        <div className="account-content">
          <div className="container">
            <div className="account-logo">
              <Link to="/zarud-admin">
                <img
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
            <div className="account-box">
              <div className="account-wrapper">
                <h3 className="account-title">Login</h3>
                <p className="account-subtitle">Access to our dashboard</p>
                <form>
                  <div className="input-block mb-4">
                    <label className="col-form-label">Username</label>
                    <input
                      className="form-control"
                      type="text"
                      value=""
                      placeholder="Enter Username"
                    />
                  </div>
                  <div className="input-block mb-4">
                    <div className="row align-items-center">
                      <div className="col">
                        <label className="col-form-label">Password</label>
                      </div>
                      <div className="col-auto">
                        <Link
                          to="/"
                          className="text-muted"
                          href="forgot-password.html">
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    <div className="position-relative">
                      <input
                        className="form-control"
                        type={passwordVisible ? "password" : "text"}
                        id="password"
                        placeholder="Password"
                      />
                      <span id="toggle-password">
                        <FontAwesomeIcon
                          icon={passwordVisible ? faEye : faEyeSlash}
                          onClick={togglePasswordVisibility}
                        />
                      </span>{" "}
                    </div>
                  </div>
                  <div className="input-block mb-4 text-center">
                    <button
                      className="btn btn-primary account-btn"
                      type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
