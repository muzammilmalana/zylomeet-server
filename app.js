const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("offer", (data) => socket.broadcast.emit("offer", data));
  socket.on("answer", (data) => socket.broadcast.emit("answer", data));
  socket.on("ice-candidate", (data) =>
    socket.broadcast.emit("ice-candidate", data)
  );
  socket.on("disconnect", () => console.log("User disconnected:", socket.id));
});

const PORT = 3000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://192.168.100.27:${PORT}`);
});
