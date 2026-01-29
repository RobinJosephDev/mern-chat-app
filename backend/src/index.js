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
  "https://mern-chat.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // allow server-to-server, Postman
      if (!origin) return callback(null, true);

      if (
        origin === "http://localhost:5173" ||
        origin.endsWith(".vercel.app")
      ) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
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
