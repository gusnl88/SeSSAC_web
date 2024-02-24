'use strict';


const Sequelize = require('sequelize');

const config = require(__dirname + '/../config/config.json')["development-database"];//로컬시 development-local

const db = {};

const sequelize=new Sequelize(config.database,config.username,config.password,config)

const UserModel=require('../models/User')(sequelize,Sequelize)

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User=UserModel;

module.exports = db;
