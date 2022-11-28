import { Schema } from "mongoose";

// Document interface
interface Boadr {
  title: string;
  content: string;
  // createDate
}

// Schema
const schema = new Schema<Boadr>({
  title: { type: String, required: true },
  content: { type: String, required: true },
});
