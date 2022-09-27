const Sequelize = require('sequelize');
const Post = require('./posts');

const config = require('../config/config.json')['development'];

const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.Post = Post;

Post.init(sequelize);
Post.associate(db);

module.exports = db;