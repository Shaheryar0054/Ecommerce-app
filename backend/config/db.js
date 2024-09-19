import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.Mongo_URI);
    console.log (`MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {
    console.log (`Error: ${error.message}`);
    process.exitCode(1); //process code 1 code means exite with failure, 0 means success//
  }
}