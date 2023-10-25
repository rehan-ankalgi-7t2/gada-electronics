import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  try {
    app.listen(process.env.PORT, () =>
      console.log(`server running on port: ${process.env.PORT}`)
    );
  } catch (error) {
    throw new Error(error);
  }
};
startServer();
