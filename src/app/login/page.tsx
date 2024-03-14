"use client";
import React, { useState, useEffect } from "react";
import "./login.css";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Spinner from "@/components/shared/Spinner/Spinner";
import { useAuth } from "@/Context/authContext";

const LoginPage = () => {
  const router = useRouter();
  const [data, setData] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const { setIsLoggedIn } = useAuth();

  useEffect(() => {}, [user]);

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (user.email === "" || user.password === "") {
        toast.error("You must fill all required fields!");
      } else {
        setLoading(true);
        const response = await axios.post("/api/users/login", user);
        console.log("Login success", response.data);
        toast.success("Login Successful!");
        setIsLoggedIn(true);
        router.push(`/dashboard`);
      }
    } catch (error) {
      toast.error("Something went wront!");
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={onLogin}>
        <div className="loadingSpinner">{loading ? <Spinner /> : null}</div>

        <h2>Login</h2>

        <div className="inputcontainer">
          <input
            type="email"
            placeholder="Please enter your email ..."
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Please enter your password ..."
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button className="login-loginBtn">Login</button>
          <p className="signuplink">
            <Link href="/signup" className="login-signupBtn">
              Signup here
            </Link>{" "}
            if you don&#39;t have an account
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
