"use client";
import React, { useEffect } from "react";
import "./dashboard.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = () => {
  const router = useRouter();
  const [data, setData] = React.useState("nothing");

  useEffect(() => {}, [data]);

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

  return (
    <div className="dashboard">
      <h1>Welcome To Your Admin Dashboard: $User</h1>
      <p>Click here to go to your dashboard</p>
      <button className="logoutBtn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
