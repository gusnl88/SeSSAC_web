'use strict';


const Sequelize = require('sequelize');

const config = require(__dirname + '/../config/config.json')["development-database"];//로컬시 development-local

const db = {};

const sequelize=new Sequelize(config.database,config.username,config.password,config)

const UserModel=require('../models/User')(sequelize,Sequelize)
const ReservationModel=require('../models/Reservation')(sequelize,Sequelize)

UserModel.hasMany(ReservationModel, {
    foreignKey: 'u_id', // 외래 키는 사용자 ID를 가리킵니다.
});

ReservationModel.belongsTo(UserModel, {
    foreignKey: 'u_id', // 외래 키는 사용자 ID를 가리킵니다.
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User=UserModel;
db.Reservation=ReservationModel;
module.exports = db;

