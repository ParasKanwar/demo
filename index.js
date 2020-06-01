const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
require("./database/database");
const User = require("./models/user/user");
app.use(express.static(path.join(__dirname, "../demo/build")));
app.use(express.json());
app.post("/signup", (req, res) => {
  const user = req.body;
  const user1 = new User(user);
  user1
    .save()
    .then((val) => {
      res.send(val);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../demo/build/index.html"));
});

app.listen(port, () => {
  console.log("server is listening");
});
