const PlayerModel = function (sequelize, DataTypes) {
  const player = sequelize.define(
    "Player",
    {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // ,
      // team_id: {
      //     type: DataTypes.INTEGER,
      //     allowNull: false,
      //     references: {
      //         model: "Team", // 외래키가 참조하는 테이블의 이름
      //         key: "team_id" // 참조하는 열의 이름
      //     }
      // }
    },
    {
      tableName: "Player",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return player;
};

module.exports = PlayerModel;
