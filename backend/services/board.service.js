const { Board } = require("../models");

const getPages = async (data) => {
  const { pageNum, pageSize } = data;
  return Board.findAll({
    limit: pageSize,
    offset: pageSize * (pageNum - 1),
  });
};

const getPagesCount = async () => {
  return Board.count();
};

module.exports = {
  getPages,
  getPagesCount,
};
