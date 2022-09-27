const express = require("express");

const router = express.Router();

// Services
const boardService = require('../services/boardService');

router.get("/", async (req, res) => {
  let {pageNum, pageSize} = req.query;
  pageNum = parseInt(pageNum);
  pageSize = parseInt(pageSize);
  
  // call Service
  const Board = new boardService();
  const pages = await Board.getPages({pageNum, pageSize});
  
  res.status(200).send(pages);

});

router.get('/pagecount', async (req, res) => {
  const Board = new boardService();
  const pageCount = await Board.getPageCount();

  
  res.send(`${pageCount}`);
}) 

module.exports = router;
