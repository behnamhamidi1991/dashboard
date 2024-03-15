import { connectDB } from "@/database/dbConfig";
import Post from "@/models/postModel";

// GET /api/posts/:id
<<<<<<< HEAD
export const GET = async ({ params }: any) => {
=======
export const GET = async (request: NextRequest, { params }: any) => {
>>>>>>> dev
  try {
    await connectDB();

    const singlePost = await Post.findById(params.id);

<<<<<<< HEAD
    if (!singlePost) return new Response("Post Not Found!", { status: 404 });
=======
    if (!post) return new Response("Post Not Found!", { status: 404 });
>>>>>>> dev

    return new Response(JSON.stringify(singlePost), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
