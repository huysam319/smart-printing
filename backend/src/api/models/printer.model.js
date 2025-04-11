const Sequelize = require("sequelize")
const db  = require("../../config/database");
const Admin = require("../models/admin.model")
const Printer = db.define('Printer',{
  printerId:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true,
  },
  adminId:{
    type:Sequelize.INTEGER,
    references:{
      model:Admin,
      key:'adminId'
    },
  },
  model:{
    type:Sequelize.STRING
  },
  brand:{
    type:Sequelize.STRING
  },
  description:{
    type:Sequelize.STRING
  },
  enable:{
    type:Sequelize.BOOLEAN,
    defaultValue:true
  },
  campusName:{
    type:Sequelize.STRING
  },
  buildingName:{
    type:Sequelize.STRING
  },
  roomNumber:{
    type:Sequelize.INTEGER
  }
})
Admin.hasMany(Printer, { foreignKey: 'adminId' });
Printer.belongsTo(Admin, { foreignKey: 'adminId' });
module.exports = Printer