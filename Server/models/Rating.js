module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Rating" , {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        value: {
            type: DataTypes.INTEGER,
             allowNull : false,
             validate: {
                min: 1,
                max: 5
             }
         }  
    });
};