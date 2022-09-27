const Sequelize = require('sequelize');
const Board = require('./boards');

const config = require('../config/config.json')['development'];

const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.Board = Board;

Board.init(sequelize);
Board.associate(db);

module.exports = db;