const { boardService } = require("../services");

const pagination = async (req, res) => {
  let { pageNum, pageSize } = req.query;
  pageNum = parseInt(pageNum);
  pageSize = parseInt(pageSize);

  const pages = await boardService.getPages({ pageNum, pageSize });
  const rowCount = await boardService.getPagesCount();
  const pagesCount = Math.ceil(rowCount / pageSize);
  
  res.status(200).send({
    success: true,
    message: '페이지네이션 데이터 조회',
    data: {
      pages,
      pagesCount
    }
  });
};

module.exports = {
  pagination,
};
