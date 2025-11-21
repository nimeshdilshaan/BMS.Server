import mongoose from "mongoose";

// Replace with your MongoDB connection string
const MONGO_URI = "mongodb://127.0.0.1:27017/bms_db";

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(" MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process if connection fails
  }
};

export default connectDB;
