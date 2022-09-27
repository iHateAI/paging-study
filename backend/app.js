const express = require("express");

const app = express();

const SERVER_PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("ㅎㅎ");
});

app.listen(SERVER_PORT, () => {
  console.log(`http://localhost:${SERVER_PORT}`);
});
