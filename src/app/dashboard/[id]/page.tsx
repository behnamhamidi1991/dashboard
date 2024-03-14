"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./singledashboard.css";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const UserProfile = () => {
  const router = useRouter();
  const [user, setUser] = useState("");

  const onLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("You logged out!");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get("/api/users/me");
      console.log(res.data);
      setUser(res.data.data.username);
    };

    getUserDetails();
  }, [user]);

  return (
    <div className="single-dashboard">
      <div className="single-dashboard-header">
        <h1>Now this is your own profile</h1>
        <p className="single-dashboard-welcome">
          Welcome dear <span> {user} </span>
        </p>
      </div>

      <div className="single-dashboard-middle">
        <h2>Your Packages and Courses</h2>
        <ul>
          <li>JavaScript</li>
          <li>Nodejs</li>
          <li>MongoDB</li>
          <li>Expressjs</li>
        </ul>
      </div>

      <div className="single-dashboard-middle-btns">
        <button className="single-logout" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
