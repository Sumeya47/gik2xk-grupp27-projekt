'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

// Anslut till databasen med inställningar från config.json
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Läser in alla modellfiler automatiskt från models-mappen
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

  // Kör associate-funktioner om de finns
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// En användare kan ha många varukorgar
db.User.hasMany(db.Cart);
db.Cart.belongsTo(db.User);

// En varukorg kan ha många produkter och en produkt kan finnas i många varukorgar
db.Cart.belongsToMany(db.Product, { through: db.CartRow, foreignKey: "cartId"});
db.Product.belongsToMany(db.Cart, { through: db.CartRow, foreignKey: "productId"});

// En produkt kan ha många betyg
db.Product.hasMany(db.Rating);
db.Rating.belongsTo(db.Product);


module.exports = db;

