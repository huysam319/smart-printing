const Sequelize = require("sequelize")
const db  = require("../../config/database");
const Student = db.define('Student',{
  studentId:{
    type:Sequelize.STRING,
    primaryKey:true
  },
  name:{
    type:Sequelize.TEXT,
    allowNull:false
  },
  faculity:{
    type:Sequelize.TEXT,
    allowNull:false
  },
  major:{
    type:Sequelize.TEXT,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    allowNull:false,
    validate: {
      isEmail: true,
    },
    unique:true
  },
  passwd:{
    type:Sequelize.STRING,
    allowNull:false
  },
  pageBalance:{
    type:Sequelize.INTEGER,
    defaultValue:10
  }
})

module.exports = Student