const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.static(path.join(__dirname, "../demo/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../demo/build/index.html"));
});

app.listen(port, () => {
  console.log("server is listening");
});