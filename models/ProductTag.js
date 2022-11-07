const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    // id
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
      },
    // product id
    product_id: {
      type: DataTypes.INTEGER,
      // This references the `product` model, which we set in `Product.js` as its `modelName` property
      references: {
        model: 'product',
        key: "id",
      },
    },
    // tag id
    tag_id: {
      type: DataTypes.INTEGER,
      // This references the `tag` model, which we set in `Tag.js` as its `modelName` property
      references: {
        model: 'tag',
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
