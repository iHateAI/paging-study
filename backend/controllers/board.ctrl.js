const { boardService } = require("../services");

const pagination = async (req, res) => {
  let { pageNum, pageSize } = req.query;
  pageNum = parseInt(pageNum);
  pageSize = parseInt(pageSize);

  const pages = await boardService.getPages({ pageNum, pageSize });

  res.status(200).send(pages);
};

module.exports = {
  pagination,
};
