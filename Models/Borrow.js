const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Borrow extends Model {}

Borrow.init(
  // define columns
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // this is the borrower's id
    user_id: {
      type: DataTypes.INTEGER,
      //FOREIGN KEY: References Borrower PK id 
      references: {
        model: 'user',
        key: 'id',
      },
    },
    gear_id: {
      type: DataTypes.INTEGER,
      //FOREIGN KEY: References Gear PK id 
      references: {
        model: 'gear',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'borrow',
  });

module.exports = Borrow;