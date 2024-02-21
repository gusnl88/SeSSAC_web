const GameModel=function (sequelize,DataTypes){

    const Game=sequelize.define('Game',{
        game_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        date:{
            type:DataTypes.DATE,
            allowNull:false
        },
        location:{
            type:DataTypes.STRING(255),
            allowNull:false
        }
    },{
        freezeTableName:true
    })

    return Game;
}
module.exports=GameModel;