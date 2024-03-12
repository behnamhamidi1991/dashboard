import React from "react";
import "./login.css";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <h2>Login</h2>

        <div className="inputcontainer">
          <input type="text" />
          <input type="password" />
          <button className="login-loginBtn">Login</button>
          <p className="signuplink">
            <Link href="/signup" className="login-signupBtn">
              Signup here
            </Link>{" "}
            if you don&quot;t have an account
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
