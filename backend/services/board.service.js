const { Board } = require("../models");

const getPages = async (data) => {
  const { pageNum, pageSize } = data;
  return Board.findAll({
    order: [["id", "DESC"]],
    limit: pageNum,
    offset: pageSize,
  });
};

module.exports = {
  getPages,
};
