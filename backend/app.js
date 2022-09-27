const express = require("express");
const { sequelize } = require("./models");
const morgan = require("morgan");
const dotenv = require("dotenv");

// router import
const boardRouter = require('./routes/boardRouter');

const app = express();
dotenv.config();

const SERVER_PORT = process.env.PORT || 3000;

// sequelize
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터 베이스 연결");
  })
  .catch((err) => {
    console.error("데이터 베이스 연결 실패");
  });

// third-party middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.use('/boards', boardRouter);

app.listen(SERVER_PORT, () => {
  console.log(`http://localhost:${SERVER_PORT}`);
});
