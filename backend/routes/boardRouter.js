const express = require("express");

const router = express.Router();

// Services
const boardService = require('../services/boardService');

router.get("/", async (req, res) => {
  const Board = new boardService();
  await Board.addTestData();
});

module.exports = router;
