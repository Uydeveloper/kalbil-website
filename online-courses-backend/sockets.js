// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

// Routes (ئەگەر كېرەك بولسا قوشۇڭ)
// const courseRoutes = require('./src/routes/courses');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000", // React دېۋېلۆپمېنت سېرۋېر
    methods: ["GET", "POST"]
  }
});

// Socket.IO قوللىنىش
const { initSockets } = require('./sockets'); // ✅ كودىڭىز بۇ يەردە
initSockets(io);

// Middleware
app.use(cors());
app.use(express.json());

// Routes (ئىختىيارى)
// app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🟢 Server running on http://localhost:${PORT}`);
});