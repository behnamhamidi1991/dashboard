import React, { useState, useEffect } from "react";
import "./blogpage.css";
import axios from "axios";
import Link from "next/link";

async function fetchPosts() {
  try {
    const res = await fetch("http:localhost:3000/api/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch data!");
    }

    return res.json();
  } catch (error: any) {
    console.log(error);
  }
}

const GetAllPosts = async () => {
  const posts = await fetchPosts();

  return (
    <div className="blog-page-section">
      {posts.map((item) => (
        <div key={item._id} className="blog-page-section-box">
          <h2>{item.postTitle}</h2>
          <p>{item.postText.substring(0, 299)} ...</p>
          <Link href="/">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default GetAllPosts;
