"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import "./singlepost.css";
const apiDomain = process.env.API_DOMAIN;

async function fetchSinglePost(id: string | any) {
  try {
    if (!apiDomain) {
      return null;
    }

    const res = await fetch(`${apiDomain}/posts/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return await res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

const SinglePostPage = () => {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!id) return;
      try {
        const singlePost = await fetchSinglePost(id);
        setSinglePost(singlePost);
      } catch (error) {
        console.error("Error fetching posts" + error);
      } finally {
        setLoading(false);
      }
    };

    if (singlePost === null) {
      fetchPosts();
    }

    console.log(singlePost);
  }, [id, singlePost]);

  return (
    <div className="singlepostPage">
      <h2>Test</h2>
    </div>
  );
};

export default SinglePostPage;
