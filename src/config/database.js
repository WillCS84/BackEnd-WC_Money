const Sequelize = require("sequelize")
const sequelize = new Sequelize("crud-db", "user", "password", {
  dialect: "sqlite",
  host: "./src/config/db-finances.db",
  underscored: true,
  timestamps: true,
  logging: false
})

module.exports = sequelize
