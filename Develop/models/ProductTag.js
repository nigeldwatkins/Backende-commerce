const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define column
  id: {
    type: DataTypes.INTEGER,
    allowNULL: false,
    primaryKey: true,
    autoIncrement: true, 

  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "tag",
      key: "id",
    },
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "product",
      key: "id",
    },
  },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
