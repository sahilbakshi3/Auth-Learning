import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // console.log("mongo uri", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo DB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("error connecting to the DB: ", error.message);
    process.exit(1);
  }
};
