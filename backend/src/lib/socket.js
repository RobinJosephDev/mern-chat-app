import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

// used to store online users
export const userSocketMap = {}; // {userId: socketId}

// function must come after userSocketMap
export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

export const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173",
      "https://mern-chat-2xxhq87n8-robinjo1776-5d95d5ba.vercel.app",
    ],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, server };
