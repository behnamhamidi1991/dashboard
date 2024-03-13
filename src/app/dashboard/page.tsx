import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome To Your Admin Dashboard: $User</h1>
      <p>Click here to go to your dashboard</p>
      <button className="logoutBtn">Logout</button>
    </div>
  );
};

export default Dashboard;
