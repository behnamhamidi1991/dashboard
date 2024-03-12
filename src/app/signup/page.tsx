"use client";
import React, { useState } from "react";
import "./signup.css";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Spinner from "@/components/shared/Spinner/Spinner";

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false);

  return (
    <div className="signup-page">
      <form className="signup-form">
        <div className="loadingSpinner">{loading ? <Spinner /> : null}</div>
        <h2>Signup</h2>

        <div className="inputcontainer">
          <input type="text" placeholder="Username e.g. johndoe" />
          <input type="email" placeholder="Email e.g. johndoe@gmail.com" />
          <input type="password" placeholder="Password " />
          <input type="password" placeholder="Confirm Password " />
          <button className="signup-signupBtn">signup</button>
          <p className="loginlink">
            <Link href="/login" className="signup-loginBtn">
              Login here
            </Link>{" "}
            if you already have an account
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
