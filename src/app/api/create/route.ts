import { connectDB } from "@/database/dbConfig";
import Post from "@/models/postModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { postTitle, postText } = reqBody;

    console.log(reqBody);

    const newPost = new Post({
      postTitle,
      postText,
    });

    const savedPost = await newPost.save();
    console.log(savedPost);

    return NextResponse.json({
      message: "Post has been successfully created!",
      success: true,
      savedPost,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
