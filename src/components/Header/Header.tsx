"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import "./header.css";
import Cookies from "js-cookie";
import { useAuth } from "@/Context/authContext";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  return (
    <header className="header">
      {isLoggedIn ? (
        <Link href="/dashboard" className="header-user-dashboard">
          <FaUser />
          <p className="header-dashboard-btn">Dashboard</p>
        </Link>
      ) : (
        <Link href="/login" className="header-user-login">
          <FaUser />
          <p className="header-dashboard-btn">Login & Register</p>
        </Link>
      )}
      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
