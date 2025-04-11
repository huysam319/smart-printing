const Admin = require('../models/admin.model')
const Printer = require('../models/printer.model')
const printerValidation = require('../validation/printerValidation')
exports.getAllPrinter = (req,res) => {
  Printer.findAll()
  .then( printers =>{
    res.status(200).json({
      message:"Get all printers",
      printers: printers
    })
  })
  .catch( err =>{
    res.status(400).json({
      message:"Bad request",
      detail: err
    })
  })
}
exports.getPrinterById = (req,res) => {
   const printerId = req.params.id
   Printer.findByPk(parseInt(printerId))
  .then(printer =>{
      if(!printer){
        res.status(404).json({
          message:"Printer not found !",
        })
      }else{
        res.status(200).json({
          message:`Get printer by Id: ${printerId}`,
          printer:printer
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
exports.getPrinterByAdminId = (req,res) =>{
  const adminId = req.params.id
   Printer.findOne({
    where:{
      adminId:adminId
    }
   })
  .then(printer =>{
      if(!printer){
        res.status(404).json({
          message:"Printer not found !",
        })
      }
      res.status(200).json({
        message:`Get printer by Admin Id: ${adminId}`,
        printer:printer
      })
  })
  .catch( err =>{
    res.status(400).json({
      message:"Bad request",
      detail: err
    })
  })
}
exports.createPrinter = (req,res) =>{
  if (printerValidation(req)){
    Printer.create({
      adminId:req.params.id,
      model:req.body.model,
      brand:req.body.brand,
      description:req.body.description,
      campusName:req.body.campus,
      buildingName:req.body.building,
      roomNumber:parseInt(req.body.room),
    })
    .then(printer =>{
      res.status(201).json({
        message: "Create printer",
        printer: printer
      })
    })
    .catch(err =>{
      res.status(400).json({
        message:"Bad request",
        detail:err
      })
    })
  }else{
    res.status(400).json({
      message:"Bad request",
      detail: "Input invalid"
    })
  }
}
exports.updatePrinter = (req,res) =>{
  const printerId = req.params.id
  if (printerValidation(req)){
    Printer.findByPk(printerId)
    .then(printer =>{
      if(!printer){
        res.status(404).json({
          message:"printer not found !"
        })
      }
      printer.model=req.body.model,
      printer.brand=req.body.brand,
      printer.description=req.body.description,
      printer.campusName=req.body.campus,
      printer.buildingName=req.body.building,
      printer.roomNumber=req.body.room
      return printer.save()
    })
    .then(printer =>{
      res.status(200).json({
        message:"Update printer",
        printer:printer
      })
    })
    .catch(err =>{
      res.status(400).json({
        message:"Bad request",
        detail:err
      })
    })
  }else{
    res.status(400).json({
      message:"Bad request",
      detail: "Input invalid"
    })
  }
}
exports.enablePrinter = (req,res) =>{
  const printerId = req.params.id
  if (!req.body.enable !== null){
    Printer.findByPk(printerId)
    .then(printer =>{
      if(!printer){
        res.status(404).json({
          message:"printer not found !"
        })
      }
      printer.enable = req.body.enable
      return printer.save()
    })
    .then(printer =>{
      res.status(200).json({
        message:"Update printer",
        printer:printer
      })
    })
    .catch(err =>{
      res.status(400).json({
        message:"Bad request",
        detail:err
      })
    })
  }else{
    res.status(400).json({
      message:"Bad request",
      detail: "Input invalid"
    })
  }
}
exports.deletePrinter = (req,res) =>{
  const printerId = req.params.id
  Printer.findByPk(printerId)
  .then(printer =>{
    if(!printer){
      res.status(404).json({
        message:"printer not found !"
      })
    }
    return printer.destroy({
      where:{
        printerId:printerId
      }
    })
  })
  .then(printer =>{
    res.status(200).json({
      message:"Delete printer",
      printer:printer
    })
  })
  .catch(err =>{
    res.status(400).json({
      message:"Bad request",
      detail:err
    })
  })
}
