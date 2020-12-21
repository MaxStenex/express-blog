import mongoose, { Schema, Document } from "mongoose";

export interface PostType extends Document {
  title: string;
  text: string;
  authorId: string;
  photoName: string;
}

const postSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    authorId: { type: String, required: true },
    photoName: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<PostType>("Post", postSchema);
