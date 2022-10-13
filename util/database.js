const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node_complete", "root", "Badmantons10", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
