"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
<<<<<<< HEAD
import { fetchPost } from "@/utils/request";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loadnig, setLoading] = useState(true);
=======
import { fetchSinglePost } from "@/utils/request";

const SinglePost = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
>>>>>>> dev

  useEffect(() => {
    const fetchPostData = async () => {
      if (!id) return;
<<<<<<< HEAD

      try {
        const post = await fetchPost(id);
        setPost(post);
        console.log(post);
      } catch (error) {
        console.error("Error fetching property:", error);
=======
      try {
        const post = await fetchSinglePost(id);
        setPost(post);
        console.log(post);
      } catch (error) {
        console.log(error);
>>>>>>> dev
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
