module.exports = (sequelize, DataTypes) => {
    return sequelize.define("CartRow" , {
         id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        amount: {
            type: DataTypes.INTEGER,
             allowNull : false,
              defaultValue : 1,
              validate: {
                min: 1
              }
        }       
    });
};

