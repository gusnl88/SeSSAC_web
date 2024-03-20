const UserModel= (sequelize,DataTypes)=>{

    const User=sequelize.define('User',{
        u_id:{
            type:DataTypes.STRING(10),
            allowNull:false,
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING(10),
            allowNull:false,
        },
        pw:{
            type:DataTypes.STRING(60),
            allowNull:false
        }
        
    },{
        freezeTableName: true
    })
    return User;
}

module.exports=UserModel;