import { connectDB } from "@/database/dbConfig";
import { NextRequest } from "next/server";
import Post from "@/models/postModel";

// GET /api/posts
export const GET = async (request: NextRequest) => {
  try {
    await connectDB();

    const posts = await Post.find({});

    return new Response(JSON.stringify(posts), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
