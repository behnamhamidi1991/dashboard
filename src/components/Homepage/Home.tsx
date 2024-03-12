"use client";

import Link from "next/link";
import React from "react";
import "./home.css";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { FaSwift } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { toast } from "react-toastify";

const Home = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Devlingo</h1>
      <p>
        Please login to use all our amazing services. If you don&quot;t have an
        account, create one!
      </p>
      <div className="btncontainer">
        <Link href="/login" className="loginBtn">
          Login
        </Link>
        <Link href="/login" className="registerBtn">
          Register
        </Link>
      </div>

      <div className="course-container">
        <div className="box-item">
          <IoLogoJavascript className="box-item-icon" />
        </div>
        <div className="box-item">
          <FaReact className="box-item-icon" />
        </div>
        <div className="box-item">
          <TbBrandNextjs className="box-item-icon" />
        </div>
        <div className="box-item">
          <SiTypescript className="box-item-icon" />
        </div>
        <div className="box-item">
          <SiRedux className="box-item-icon" />
        </div>
        <div className="box-item">
          <FaPhp className="box-item-icon" />
        </div>
        <div className="box-item">
          <DiMysql className="box-item-icon" />
        </div>
        <div className="box-item">
          <TbBrandReactNative className="box-item-icon" />
        </div>
        <div className="box-item">
          <FaGolang className="box-item-icon" />
        </div>
        <div className="box-item">
          <FaCss3 className="box-item-icon" />
        </div>
        <div className="box-item">
          <FaSass className="box-item-icon" />
        </div>
        <div className="box-item">
          <SiTailwindcss className="box-item-icon" />
        </div>
        <div className="box-item">
          <FaJava className="box-item-icon" />
        </div>
        <div className="box-item">
          <SiKotlin className="box-item-icon" />
        </div>
        <div className="box-item">
          <FaSwift className="box-item-icon" />
        </div>
        <div className="box-item">
          <SiMui className="box-item-icon" />
        </div>
        <div className="box-item">
          <DiMongodb className="box-item-icon" />
        </div>
        <div className="box-item">
          <SiExpress className="box-item-icon" />
        </div>
        <div className="box-item">
          <FaNodeJs className="box-item-icon" />
        </div>
        <div className="box-item">
          <SiDotnet className="box-item-icon" />
        </div>
        <div className="box-item">
          <TbBrandCpp className="box-item-icon" />
        </div>
        <div className="box-item">
          <TbBrandCSharp className="box-item-icon" />
        </div>
        <div className="box-item">
          <FaLaravel className="box-item-icon" />
        </div>
      </div>
    </div>
  );
};

export default Home;
