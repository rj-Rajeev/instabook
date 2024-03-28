import mongoose from "mongoose";

const mongoURI = process.env.MONGODB_URI;

export const dbConnect = async () => {
  try {
    const db = await mongoose.connect(mongoURI);
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};
