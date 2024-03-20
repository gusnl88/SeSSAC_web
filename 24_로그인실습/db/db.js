const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')["development-database"]; // 로컬 시 development-local

const sequelize = new Sequelize(config.database, config.username, config.password, config);

module.exports = sequelize;