const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("hello there");
});

app.listen(8001, () => {
  console.log("server is runing on 8001");
});
