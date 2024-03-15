"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchPost } from "@/utils/request";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loadnig, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostData = async () => {
      if (!id) return;

      try {
        const post = await fetchPost(id);
        setPost(post);
        console.log(post);
      } catch (error) {
        console.error("Error fetching property:", error);
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
