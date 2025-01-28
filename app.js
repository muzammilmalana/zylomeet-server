const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const signalingServer = require("./src/controller/signalingServer");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use(express.static("public"));

webRTCSignalingSocket(io);

const PORT = 3000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://192.168.100.27:${PORT}`);
});
