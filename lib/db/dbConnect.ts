// import { Schema, model, connect } from "mongoose";
const mongoose = require("mongoose");

var connect = mongoose.connect;
// 1. Create an interface representing a document in MongoDB.
// interface IUser {
//   name: string;
//   email: string;
//   avatar?: string;
// }

// 2. Create a Schema corresponding to the document interface.
// var userSchema = new Schema<IUser>({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   avatar: String,
// });

// 3. Create a Model.
// var User = model<IUser>("User", userSchema);

console.log("??1");

dbConnect().catch((err) => console.log(err));

async function dbConnect() {
  // 4. Connect to MongoDB
  await connect(process.env.MONGODB_URI!);
  // await connect(process.env.MONGODB_URI || '' );

  // const user = new User({
  //   name: "Bill",
  //   email: "bill@initech.com",
  //   avatar: "https://i.imgur.com/dM7Thhn.png",
  // });
  // await user.save();

  // console.log(user.email); // 'bill@initech.com'
}

export default dbConnect;
