import React, { useState } from "react";
import "./LoginModal.css";

export default function LoginModal({ isOpen, onClose }) {
  const [otpSent, setOtpSent] = useState(false); // Track if OTP is sent

  if (!isOpen) return null;

  const handleOtpClick = () => {
    if (!otpSent) {
      // Simulate sending OTP
      setOtpSent(true);
    } else {
      // Simulate verifying OTP
      alert("OTP verified successfully ✅");
      onClose(); // You can close popup or move to next step
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div
        className="popup-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex justify-content-center align-content-center">
          <img src="/warmy logo phone.png" alt="Warmy logo" height="45" />
        </div>

        <h2 className="my-3">{otpSent ? "Verify OTP" : "Login"}</h2>

        <div className="my-5">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label mb-1"
            style={{ fontSize: "2.4vh" }}
          >
            {otpSent ? "Enter OTP" : "Email / Mobile Number"}
          </label>

          <input
            type={otpSent ? "text" : "email"}
            className="form-control py-2 mt-0 mb-4"
            id="exampleFormControlInput1"
            placeholder={otpSent ? "Enter 6-digit OTP" : "Enter email or mobile"}
          />

          <button
            className="otp_btn form-control py-2"
            onClick={handleOtpClick}
          >
            {otpSent ? "Verify OTP" : "Send OTP"}
          </button>
        </div>

        {!otpSent && (
          <>
            <p style={{ fontSize: "2.4vh" }}>
              Don't have an account?{" "}
              <span style={{ color: "#136169" }}>Sign Up</span>
            </p>
            <p style={{ fontSize: "2.4vh" }}>
              By continuing you agree to our{" "}
              <span style={{ color: "#136169" }}>
                Terms of Use & Privacy Policy
              </span>
            </p>
          </>
        )}

        <button className="popup-close" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}

