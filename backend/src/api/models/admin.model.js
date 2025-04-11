const Sequelize = require("sequelize")
const db  = require("../../config/database");

const Admin = db.define("Admin",{
  adminId:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey:true,
  },
  adminName:{
    type:Sequelize.STRING,
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
  campusName:{
    type:Sequelize.STRING,
  },
  building:{
    type:Sequelize.STRING,
  },
  roomNumber:{
    type:Sequelize.INTEGER
  }

})


module.exports = Admin