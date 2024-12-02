import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";



// Import dotenv
import dotenv from 'dotenv';
// import mongoose from 'mongoose';

dotenv.config();

// Import mongoose

const app = express();

// Set Content Security Policy

// app.use((req, res, next) => {
//     res.setHeader("Content-Security-Policy", "default-src 'self'; img-src 'self' http://localhost:8800;"); // Adjust as needed
//     next();
// });

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);

app.listen(8800, () => {
    console.log("Server is running on http://localhost:8800");
});