"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./blog.css";

const CreateBlogPost = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    postTitle: "",
    postText: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (post.postTitle === "" || post.postText === "") {
        toast.error("You must fill in all required inputs!");
      } else {
        setLoading(true);
        const response = await axios.post("/api/posts/create", post);
        console.log(response.data);
        toast.success("Post has been successfully created!");
        setPost({
          postTitle: "",
          postText: "",
        });
      }
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <div className="blog-page">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={post.postTitle}
          onChange={(e) => setPost({ ...post, postTitle: e.target.value })}
          placeholder="Title ..."
          required={true}
        />
        <textarea
          value={post.postText}
          onChange={(e) => setPost({ ...post, postText: e.target.value })}
          placeholder="Post content ..."
          required={true}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreateBlogPost;
