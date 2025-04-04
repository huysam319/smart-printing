const Sequelize = require("sequelize")
const db  = require("../../config/database");
const Student = require("../models/student.model")
const Printer = require("../models/printer.model")
const Log = db.define('Log',{
  logId:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true
  },
  fileName:{
    type:Sequelize.STRING
  },
  fileUrl:{
    type:Sequelize.STRING
  },
  pagePrinted:{
    type:Sequelize.STRING,
    defaultValue:"All"
  },
  printerId:{
    type:Sequelize.INTEGER,
    references:{
      model:Printer,
      key:'printerId'
    },
    allowNull:false
  },
  studentId:{
    type:Sequelize.STRING,
    references:{
      model:Student,
      key:'studentId'
    },
    allowNull:false
  },
  doubleSide:{
    type:Sequelize.BOOLEAN,
    allowNull:false
  },
  pageSize:{
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  numCopy:{
    type:Sequelize.INTEGER,
    defaultValue:0,
  },
  status:{
    type:Sequelize.ENUM("Wait","Printed"),
    defaultValue:"Wait",
    allowNull:false
  },
  totalPage:{
    type:Sequelize.INTEGER
  }
})
Student.hasMany(Log, { foreignKey: 'studentId' });
Log.belongsTo(Student, { foreignKey: 'studentId' });
Printer.hasOne(Log,{ foreignKey: 'printerId' })
Log.belongsTo(Printer, { foreignKey: 'printerId' });
module.exports = Log