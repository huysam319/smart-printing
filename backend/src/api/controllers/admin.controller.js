const Admin = require("../models/admin.model")

exports.getAdminById = (req,res) =>{
  const adminId = req.params.id
  Admin.findByPk(adminId,{
    attributes: { exclude: ['passwd'] } 
  })
  .then(admin =>{
      if(!admin){
        res.status(404).json({
          message:"admin not found !",
        })
      }else{
        res.status(200).json({
          message:`Get admin by Id: ${adminId}`,
          admin:admin
        })
      }
  })
  .catch( err =>{
    res.status(400).json({
      message:"Bad request",
      detail: err
    })
  })
}

exports.createAdmin = (req,res) =>{
  Admin.create({
    adminName:req.body.name,
    email:req.body.email,
    passwd:req.body.passwd,
    campusName:req.body.campus,
    building:req.body.building,
    roomNumber:req.body.room
  })
  .then(admin =>{
    res.status(201).json({
      message: "Create admin",
      admin: admin
    })
  })
  .catch(err =>{
    res.status(400).json({
      message:"Bad request",
      detail:err
    })
  })
}