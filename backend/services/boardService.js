const { Board } = require("../models");

module.exports = class boardService {
  async getPageCount() {
    return Board.count();
  }

  async getPages(data) {
    const { pageNum, pageSize } = data;
    return Board.findAll({
      order: [["id", "DESC"]],
      limit: pageNum,
      offset: pageSize,
    });
  }
};
