const Student = require('../models/student.model')
const studentValidation = require('../validation/studentValidation')
exports.getAllStudent = (req, res) => {
  Student.findAll({
    attributes: { exclude: ['passwd'] } 
  })
  .then( students =>{
    res.status(200).json({
      message:"Get all students",
      students: students
    })
  })
  .catch( err =>{
    res.status(400).json({
      message:"Bad request",
      detail: err
    })
  })
};

exports.getStudentById = (req, res) =>{
  const studentId = req.params.id
  Student.findByPk(studentId,{
    attributes: { exclude: ['passwd'] } 
  })
  .then(student =>{
      if(!student){
        res.status(404).json({
          message:"Student not found !",
        })
      }
      res.status(200).json({
        message:`Get student by Id: ${studentId}`,
        student:student
      })
  })
  .catch( err =>{
    res.status(400).json({
      message:"Bad request",
      detail: err
    })
  })
}

exports.createStudent = (req,res) =>{
  if (studentValidation(req)){
    Student.create({
      studentId:req.body.id,
      name:req.body.name,
      faculity:req.body.faculity,
      major:req.body.major,
      email:req.body.email,
      passwd:req.body.passwd
    })
    .then(student =>{
      res.status(201).json({
        message: "Create student",
        student: student
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
exports.updateStudent = (req,res) =>{
  const studentId = req.params.id
  if (studentValidation(req)){
    Student.findByPk(studentId)
    .then(student =>{
      if(!student){
        res.status(404).json({
          message:"Student not found !"
        })
      }
      student.studentId=req.body.id
      student.name=req.body.name
      student.faculity=req.body.faculity
      student.major=req.body.major
      student.email=req.body.email
      student.passwd=req.body.passwd
      return student.save()
    })
    .then(student =>{
      res.status(200).json({
        message:"Update student",
        student:student
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
exports.deleteStudent = (req,res)=>{
  const studentId = req.params.id
  Student.findByPk(studentId)
  .then(student =>{
    if(!student){
      res.status(404).json({
        message:"Student not found !"
      })
    }
    return Student.destroy({
      where:{
        studentId:studentId
      }
    })
  })
  .then(student =>{
    res.status(200).json({
      message:"Delete student",
      student:student
    })
  })
  .catch(err =>{
    res.status(400).json({
      message:"Bad request",
      detail:err
    })
  })
}