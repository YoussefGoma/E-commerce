const Sequelize = require("sequelize");
const sequelize = new Sequelize("shop","root","28290506",{dialect:"mysql", host : "localhost"});
module.exports = sequelize;