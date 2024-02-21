"use strict";

const Sequelize = require("sequelize");
const config = require(__dirname + "/../config/config.js")["development"];
const db = {};

// 1.sequelize  클래스를 이용해서 sequelize 인스턴스 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//2.모델 불러오기 ,sequelize 인스턴스와 sequelize 모듈을 전달.

const PlayerModel = require("./Player")(sequelize, Sequelize);
const ProfileModel = require("./Profile")(sequelize, Sequelize);
const TeameModel = require("./Team")(sequelize, Sequelize);
const GameModel = require("./Game")(sequelize, Sequelize);
const TeamGameModel = require("./TeamGame")(sequelize, Sequelize);

// 3. 모델간 관계 성정
// hasOne,hasMany,belongsTo,belongsMany
// 3-1 ) 1:1 관계 설정 , player : profile = 1 : 1
// player 의 pk가 profile 의 fk 가 된다.
// profile 은 player 에 속해 있다.( belongsTo)
PlayerModel.hasOne(ProfileModel, {
  // 두모델 연결하는 키 설정
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "player_id",
});
ProfileModel.belongsTo(PlayerModel, {
  // 두모델 연결하는 키 설정
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "player_id",
});
  
  
// 3-2 1:N 관계 설정, team : player = 1 : N
// 한 팀에 여러 플레이어가 '속해 있음'

TeameModel.hasMany(PlayerModel, {
  foreignKey: "team_id",
  sourceKey: "team_id",
});
PlayerModel.belongsTo(TeameModel, {
  foreignKey: "team_id", // Player 테이블에 있는 외래 키
  targetKey: "team_id", // Team 테이블에 있는 기본 키
});

// 3-3 N:N 관계 설정, game : team = N : N
// 하나의 팀은 여러 경기를 할 수 있고,
// 하나의 경기에는 여러팀(2팀)이 참여

TeameModel.belongsToMany(GameModel, {
  through: TeamGameModel,
  foreingnKey: "team_id",
});
GameModel.belongsToMany(TeameModel, {
  through: TeamGameModel,
  foreingnKey: "game_id",
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Team = TeameModel;
db.TeamGame = TeamGameModel;
db.Game = GameModel;

module.exports = db;
