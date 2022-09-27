const { Board } = require("../models");

module.exports = class boardService {
  async addTestData() {
    for (let i = 1; i < 1001; i++) {
      await Board.create({
        title: `제목 ${i}`,
        author: `익명 ${i}`,
      });
    }
  }

  async getPageCount() {

  }
};
