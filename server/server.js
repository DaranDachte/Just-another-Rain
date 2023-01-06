import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import addRoutes from "./routes/addRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

app.use("/api/add", addRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Server is listening for HTTP requests on port ${PORT}`);
});
