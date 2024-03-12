import React from "react";
import "./signup.css";

const SignupPage = () => {
  return (
    <div className="signup-page">
      <form className="signup-form">
        <h2>Signup</h2>

        <div className="inputcontainer">
          <input type="text" />
          <input type="password" />
          <button className="signup-signupBtn">signup</button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
