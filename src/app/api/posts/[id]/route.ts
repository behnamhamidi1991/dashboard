import { connectDB } from "@/database/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Post from "@/models/postModel";

// GET /api/posts/:id
export const GET = async (request: NextRequest, { params }) => {
  try {
    await connectDB();

    const post = await Post.findById(params.id);

    if (!post) return new NextResponse("Post Not Found!", { status: 404 });

    return new Response(JSON.stringify(post), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
