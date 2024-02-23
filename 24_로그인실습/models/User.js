const UserModel= (sequelize,DataTypes)=>{

    const User=sequelize.define('User',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        userid:{
            type:DataTypes.STRING(10),
            allowNull:false,
        },
        name:{
            type:DataTypes.STRING(10),
            allowNull:false,
        },
        pw:{
            type:DataTypes.STRING(30),
            allowNull:false
        }
        
    },{
        freezeTableName: true
    })
    return User;
}

module.exports=UserModel;