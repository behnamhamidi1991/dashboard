"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import "./header.css";
import Cookies from "js-cookie";
import { useAuth } from "@/Context/authContext";

const Header = () => {
<<<<<<< HEAD
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const checkAuthStatus = async () => {
  //     try {
  //       const response = await axios.get("/api/auth");
  //       setIsLoggedIn(response.data.isLoggedIn);
  //     } catch (error) {
  //       console.error("Error checking auth status", error);
  //     }
  //   };

  //   checkAuthStatus();
  // }, []);

  // console.log(isLoggedIn);
=======
  const { isLoggedIn, setIsLoggedIn } = useAuth();
>>>>>>> dev

  return (
    <header className="header">
      <Link href="/dashboard" className="header-user">
        <FaUser />
        {isLoggedIn ? <p>Dashboard</p> : <p>Login & Register</p>}
      </Link>
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
