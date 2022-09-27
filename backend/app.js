const express = require("express");
const { sequelize } = require("./models");
const morgan = require("morgan");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const SERVER_PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("ㅎㅎ");
});

// 시퀄라이즈
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터 베이스 연결");
  })
  .catch((err) => {
    console.error("데이터 베이스 연결 실패");
  });

// 미들웨어
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//라우터

app.listen(SERVER_PORT, () => {
  console.log(`http://localhost:${SERVER_PORT}`);
});
