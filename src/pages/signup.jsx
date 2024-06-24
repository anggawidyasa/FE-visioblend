import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import asset1 from "./../assets/asset1.png";

const SignupForm = () => {
  return (
    <>
      <div
        className="signup-container"
        style={{ height: "100vh", width: "100vw" }}
      >
        <div
          className="signup-wrapper d-flex align-items-center"
          style={{ padding: "10% 0" }}
        >
          <div className="signup-row row p-0 m-0 w-100">
            <div className="signup-col-lg-6 col-lg-6">
              <div
                className="signup-content d-flex align-items-center justify-content-center w-100"
                style={{ height: "100%" }}
              >
                <div
                  className="signup-form-container"
                  style={{ width: "400px" }}
                >
                  <h2
                    className="signup-heading mb-5"
                    style={{
                      cursor: "default",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    Sign Up
                  </h2>
                  <div
                    className="signup-input-group mb-4 border rounded-3 d-flex align-items-center"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    <span
                      className="input-group-text bg-white border-0"
                      id="basic-addon1"
                    >
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        style={{ color: "#B8901A" }}
                      />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control py-2 border-0 flex-placeholder"
                      placeholder="Your Email"
                      aria-label="Your Email"
                      aria-describedby="basic-addon1"
                      autoComplete="email"
                    />
                  </div>
                  <div
                    className="signup-input-group border mb-4 rounded-3 d-flex align-items-center"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    <span
                      className="input-group-text bg-white border-0"
                      id="basic-addon1"
                    >
                      <FontAwesomeIcon
                        icon={faLock}
                        style={{ color: "#B8901A" }}
                      />
                    </span>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control py-2 border-0 flex-placeholder"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      autoComplete="new-password"
                    />
                  </div>
                  <div
                    className="signup-input-group border mb-5 rounded-3 d-flex align-items-center"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    <span
                      className="input-group-text bg-white border-0"
                      id="basic-addon1"
                    >
                      <FontAwesomeIcon
                        icon={faLock}
                        style={{ color: "#B8901A" }}
                      />
                    </span>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="form-control py-2 border-0 flex-placeholder"
                      placeholder="Confirm Password"
                      aria-label="Confirm Password"
                      aria-describedby="basic-addon1"
                      autoComplete="new-password"
                    />
                  </div>

                  <button
                    className="signup-btn btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                    style={{
                      backgroundColor: "#B8901A",
                      color: "white",
                      fontWeight: "500",
                      border: "none",
                      fontFamily: "Poppins, sans-serif",
                      transition:
                        "background-color 0.3s ease, transform 0.3s ease", // Efek transisi untuk hover dan klik
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor =
                        "rgba(184, 144, 26, 0.64)";
                    }} // Saat mouse masuk, ubah warna latar belakang
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#B8901A";
                    }}
                  >
                    SIGN UP
                  </button>
                  <div className="signup-divider d-flex align-items-center mt-4">
                    <div className="border col" style={{ height: "0px" }}></div>
                    <span
                      className="mx-2"
                      style={{
                        cursor: "default",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {" "}
                      OR{" "}
                    </span>
                    <div className="border col" style={{ height: "0px" }}></div>
                  </div>
                  <div className="signup-social-login row mt-3">
                    <div className="signup-col-md-6 col-md-6 mb-3">
                      <button
                        className="signup-google-btn btn btn-light w-100 d-flex align-items-center justify-content-center gap-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M27.2497 14.0819C27.2497 12.9493 27.1578 12.1227 26.9589 11.2656H14.0254V16.3777H21.6171C21.4641 17.6482 20.6375 19.5614 18.8008 20.847L18.775 21.0182L22.8644 24.1861L23.1477 24.2144C25.7496 21.8114 27.2497 18.2757 27.2497 14.0819Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M14.0247 27.5508C17.744 27.5508 20.8664 26.3263 23.147 24.2142L18.8001 20.8468C17.6369 21.658 16.0757 22.2243 14.0247 22.2243C10.3819 22.2243 7.29018 19.8214 6.18805 16.5L6.0265 16.5137L1.77436 19.8045L1.71875 19.9591C3.984 24.459 8.637 27.5508 14.0247 27.5508Z"
                            fill="#34A853"
                          />
                          <path
                            d="M6.18863 16.4995C5.89782 15.6424 5.72952 14.724 5.72952 13.7751C5.72952 12.826 5.89782 11.9077 6.17333 11.0506L6.16563 10.8681L1.8602 7.52441L1.71933 7.59142C0.785712 9.45876 0.25 11.5557 0.25 13.7751C0.25 15.9944 0.785712 18.0913 1.71933 19.9586L6.18863 16.4995Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M14.0247 5.32642C16.6114 5.32642 18.3562 6.44374 19.3511 7.37746L23.2388 3.58158C20.8512 1.36223 17.744 0 14.0247 0C8.637 0 3.984 3.09177 1.71875 7.59167L6.17275 11.0508C7.29018 7.72947 10.3819 5.32642 14.0247 5.32642Z"
                            fill="#EB4335"
                          />
                        </svg>
                        Google
                      </button>
                    </div>
                    <div className="signup-col-md-6 col-md-6 mb-3">
                      <button
                        className="signup-facebook-btn btn btn-light w-100 d-flex align-items-center justify-content-center gap-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          style={{
                            width: "30px",
                            height: "29px",
                            color: "#1877F2",
                          }}
                        />
                        Facebook
                      </button>
                    </div>
                  </div>
                  <p
                    className="signup-existing-account mt-3"
                    style={{
                      cursor: "default",
                      fontFamily: "Poppins, sans-serif",
                      fontSize: "14px",
                    }}
                  >
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="link-cstm"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "600",
                        transition: "color 0.3s ease, transform 0.3s ease", // Efek transisi untuk hover dan klik
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = "#000000";
                      }} // Saat mouse masuk, ubah warna latar belakang
                      onMouseLeave={(e) => {
                        e.target.style.color = "#B8901A";
                      }} // Saat mouse keluar, atur transparansi
                    >
                      LOGIN
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="signup-col-lg-6 col-lg-6 signup-d-cstm">
              <div
                className="signup-w-100 d-flex justify-content-center flex-column"
                style={{ height: "100%" }}
              >
                <div style={{ width: "500px" }}>
                  <p
                    className="signup-quote fs-2 m-0"
                    style={{
                      cursor: "default",
                      fontWeight: "500",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    "Realize & Capture
                    <br /> Every Moment with{" "}
                    <span style={{ color: "#B8901A" }}>VisioBlend</span>."
                  </p>

                  <p style={{ textAlign: "right", cursor: "default" }}>
                    - EST. 2023
                  </p>
                  <img
                    className="signup-asset"
                    style={{ maxWidth: "100%" }}
                    src={asset1}
                    alt="Asset 1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
