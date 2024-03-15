"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchSinglePost } from "@/utils/request";

const SinglePost = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostData = async () => {
      if (!id) return;
      try {
        const post = await fetchSinglePost(id);
        setPost(post);
        console.log(post);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (post === null) {
      fetchPostData();
    }
  }, [id, post]);

  return <div></div>;
};

export default SinglePost;
