const express = require("express");
require("@dotenvx/dotenvx").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Server Running!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
