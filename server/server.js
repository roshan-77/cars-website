import express, { json } from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import User from "./models/userModel.js";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 8080;
console.log(port);

connectDB();

app.use(bodyParser.json());

app.use("/api/users", userRoutes);

const server = app.listen(port, (err) => {
  if (err) {
    console.error("Error starting server:", err);
    process.exit(1); // Exit with failure code
  }
  console.log(`Server is running at port: ${port}`);
});

// Handle errors with the server
server.on("error", (err) => {
  console.error("Server encountered an error:", err);
});
