import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

/**
 * ✅ ALLOWED ORIGINS
 */
const allowedOrigins = [
  "http://localhost:5173",
  "https://mern-chat-ixgoftbxk-robinjo1776-5d95d5ba.vercel.app",
];

/**
 * ✅ CORS — MUST BE FIRST
 */
app.use(
  cors({
    origin: function (origin, callback) {
      // allow Postman / server-to-server
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

/**
 * ✅ ROUTES
 */
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

server.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});
