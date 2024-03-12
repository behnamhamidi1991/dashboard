import mongoose from "mongoose";

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
  postImage: {
    type: Buffer,
    contentType: String,
    required: [true, "You must select an image for your post!"],
    unique: false,
  },
  hashtags: {
    type: Array,
    required: false,
    unique: false,
  },
});
