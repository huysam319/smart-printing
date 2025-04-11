const Log = require("../models/log.model")
const Student = require("../models/student.model")
const Printer = require("../models/printer.model")
const {processString} = require("../helpers")
exports.getAllLogStudent = (req,res)=>{
  Log.findAll({
    where:{
      studentId:req.params.id
    },
    include:[
      {
        model:Student,
        attributes: ['name'],
      },
      {
        model:Printer,
        attributes: ['brand','model','buildingName','roomNumber','enable'],
      }
    ]
  })
  .then( logs =>{
    res.status(200).json({
      message:"Get all logs",
      logs: logs
    })
  })
  .catch( err =>{
    res.status(400).json({
      message:"Bad request",
      detail: err
    })
  })
}

exports.getAllLogAdmin = (req,res) => {
  Log.findAll({
    include:[
      {
        model:Student,
        attributes: ['name'],
      },
      {
        model:Printer,
        attributes: ['brand','model','adminId','buildingName','roomNumber','enable'],
        where:{
          adminId:req.params.id
        }
      }
    ]
  })
  .then( logs =>{
    res.status(200).json({
      message:"Get all logs",
      logs: logs
    })
  })
  .catch( err =>{
    res.status(400).json({
      message:"Bad request",
      detail: err
    })
  })
}

exports.createLog = (req,res) =>{
  console.log(req.file)
  console.log(req.body)
  const pagePrinted = processString(req.body.pagePrinted) 
  const numPage = pagePrinted.split(',').length
  const totalPage = ((parseInt(req.body.pageSize) == 4 ? 1 : (parseInt(req.body.pageSize) - 4) * -2) * numPage) * parseInt(req.body.numCopy)
  Log.create({
    printerId:req.body.printerId,
    fileName:req.file.originalname,
    fileUrl:`uploads/${req.file.filename}`,
    pagePrinted:pagePrinted === "" ? "All" :  pagePrinted,
    studentId:req.params.id,
    doubleSide:req.body.doubleSide,
    pageSize:req.body.pageSize,
    numCopy:req.body.numCopy,
    totalPage:totalPage
  })
  .then(log =>{
    res.status(201).json({
      message:"Create log",
      log:log
    })
  })
  .catch(err =>{
    res.status(400).json({
      message:"Bad request",
      detail:err
    })
  })
}

exports.submitPrinted = (req,res) =>{
  const logId = req.params.id
  Log.findByPk(logId)
  .then(log =>{
    if(!log){
      res.status(404).json({
        message:"log not found !"
      })
    }
    log.status = req.body.status
    return log.save()
  })
  .then(log =>{
    res.status(200).json({
      message:"Submit printed",
      log:log
    })
  })
  .catch(err =>{
    res.status(400).json({
      message:"Bad request",
      detail:err
    })
  })
}

exports.deleteLog = (req,res) =>{
  const logId = req.params.id
  Log.findByPk(logId)
  .then(log =>{
    if(!log){
      res.status(404).json({
        message:"log not found !"
      })
    }
    return log.destroy({
      where:{
        logId:logId
      }
    })
  })
  .then(log =>{
    res.status(200).json({
      message:"Delete log",
      log:log
    })
  })
  .catch(err =>{
    res.status(400).json({
      message:"Bad request",
      detail:err
    })
  })
}