import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-user">
        <FaUser />
        <p>Login & Register</p>
      </div>
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
