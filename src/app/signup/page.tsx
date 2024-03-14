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
    password2: "",
  });

  const [loading, setLoading] = React.useState(false);

  const onSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (
        user.email === "" ||
        user.password === "" ||
        user.username === "" ||
        user.password2 === ""
      ) {
        toast.error("You must fill in all inputs");
      } else if (
        user.password !== user.password2 &&
        user.email !== "" &&
        user.password !== "" &&
        user.username !== "" &&
        user.password2 !== ""
      ) {
        toast.error("Passwords don't match! Please retry!");
      } else {
        setLoading(true);
        const response = await axios.post("/api/users/signup", user);
        toast.success("User has been successfully created!");
        // Check the data in console - delete later
        router.push("/");
      }
    } catch (error: any) {
      toast.error("Signup failed!", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={onSignup}>
        <div className="loadingSpinner">{loading ? <Spinner /> : null}</div>
        <h2>Signup</h2>

        <div className="inputcontainer">
          <input
            type="text"
            placeholder="Username e.g. johndoe"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email e.g. johndoe@gmail.com"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password "
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirm Password "
            value={user.password2}
            onChange={(e) => setUser({ ...user, password2: e.target.value })}
          />
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
