import mongoose from "mongoose";

interface IPost extends Document {
  postTitle: string;
  postText: string;
}

const postSchema = new mongoose.Schema({
  postTitle: {
    type: String,
    required: [true, "You must choose a title for your post!"],
    unique: false,
  },
  postText: {
    type: String,
    required: [true, "You cannot leave the article section empty!"],
    unique: false,
  },
});

const Post = mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);
export default Post;
