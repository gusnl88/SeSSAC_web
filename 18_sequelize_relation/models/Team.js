const TeameModel=function (sequelize,DataTypes){

    const Team=sequelize.define('Team',{
        team_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING(255),
            allowNull:false
        }
    },{
        freezeTableName:true,
    })
    return Team;
}

module.exports=TeameModel;