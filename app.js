const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const path = require("path");

const port = 8080;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html")); // serve a static file
});

// socket io configs
io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
});

// app.listen would start a new http server so using the http server already created with http
server.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
