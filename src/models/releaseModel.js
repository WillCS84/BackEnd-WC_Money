const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/database")

class Release extends Model {}

Release.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
    },
    amount: {
      type: DataTypes.FLOAT
    },
    type: {
      type: DataTypes.STRING
    },
    category: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelname: "release",
    timestamps: true
  }
)

module.exports = Release
