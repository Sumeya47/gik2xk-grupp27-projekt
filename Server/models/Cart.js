// Varukorgsmodell representerar en användares varukorg
module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Cart" , {
        // unikt id som skapas automatiskt
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // Om köpet är genomfört eller inte, false = aktiv varukorg
        isCompleted: {
            type: DataTypes.BOOLEAN,
             defaultValue : false
            }     
    });
};
 