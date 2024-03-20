const ReservationModel=(sequelize,DataTypes)=>{
    const Reservation=sequelize.define('Reservation',{
        r_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        day:{
            type:DataTypes.STRING(30),
            allowNull:false,
        },
        st_room:{
            type:DataTypes.STRING(30),
            allowNull:false
        },
        time:{
            type:DataTypes.STRING(30),
            allowNull:false
        },
        count:{
            type:DataTypes.STRING(30),
            allowNull:false
        }
    },{
        freezeTableName:true
    })
    return Reservation;
}

module.exports=ReservationModel;