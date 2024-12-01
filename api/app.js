import express from "express";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
// Import dotenv
import dotenv from 'dotenv';
// import mongoose from 'mongoose';

dotenv.config();

// Import mongoose

const app = express();

// console-ninja node --watch app.js
// Set Content Security Policy
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; img-src 'self' http://localhost:8800;"); // Adjust as needed
    next();
});


app.use(express.json());
app.use(cookieParser());

app.use("/api/posts",postRoute);
app.use("/api/auth", authRoute);

app.listen(8800, () => {
    console.log("Server is running on http://localhost:8800");
});