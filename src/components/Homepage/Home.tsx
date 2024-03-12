import Link from "next/link";
import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Devlingo</h1>
      <p>
        Please login to use all our amazing services. If you don&quot;t have an
        account, create one!
      </p>
      <div className="btncontainer">
        <Link href="/login" className="loginBtn">
          Login
        </Link>
        <Link href="/login" className="registerBtn">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
