import React from "react";
import "./login.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <h2>Login</h2>

        <div className="inputcontainer">
          <input type="text" />
          <input type="password" />
          <button className="login-loginBtn">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
