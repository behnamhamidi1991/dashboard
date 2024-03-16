import { connectDB } from "@/database/dbConfig";
import Post from "@/models/postModel";

// GET /api/posts
export const GET = async ({ params }) => {
  try {
    await connectDB();

    const post = await Post.findById(params.id);

    if (!post) return new Response("Property Not Found", { status: 404 });
    return new Response(JSON.stringify(post), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
