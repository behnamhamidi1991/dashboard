import React, { useState, useEffect } from "react";
import "./blogpage.css";
import axios from "axios";
import Link from "next/link";
import { fetchPosts } from "@/utils/request";

const GetAllPosts = async () => {
  const posts = await fetchPosts();

  return (
    <div className="blog-page-section">
      {posts.map((item) => (
        <div key={item._id} className="blog-page-section-box">
          <h2>{item.postTitle}</h2>
          <p>{item.postText.substring(0, 299)} ...</p>
          <Link href={`/blog-page/${item._id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default GetAllPosts;
