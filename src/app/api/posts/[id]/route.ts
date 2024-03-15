import { connectDB } from "@/database/dbConfig";
import Post from "@/models/postModel";

// GET /api/posts/:id
export const GET = async ({ params }: any) => {
  try {
    await connectDB();

    const singlePost = await Post.findById(params.id);

    if (!singlePost) return new Response("Post Not Found!", { status: 404 });

    return new Response(JSON.stringify(singlePost), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
