import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${connection.host}`);
  } catch (error) {
    console.log("Not Connected", error);
  }
};

export default connectDb;
