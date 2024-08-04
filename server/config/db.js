import { connect } from "mongoose";
import { config } from "dotenv";

config();

const connectDB = async () => {
  try {
    await connect(process.env.mongoose_URL);
    console.log("Database Connection successful.....");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
  }
};

export default connectDB;
