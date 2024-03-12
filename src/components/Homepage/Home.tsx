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
      <Link href="/login">Login</Link>
      <Link href="/login">Register</Link>
    </div>
  );
};

export default Home;
