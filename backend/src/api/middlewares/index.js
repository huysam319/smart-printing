const Student = require("../models/student.model")
const Admin = require("../models/admin.model")
const crypto = require("crypto")
const Auth = (req,res,next) =>{
  const token = req.headers.authorization?.slice(7);
  if(!token){
    res.status(401).json({
      message:"Unathorized"
    })
  }else{
    const [encodedHeader,encodedPayload,tokenSignature] = token.split(".")
    const tokenData = `${encodedHeader}.${encodedPayload}`
    const hmac = crypto.createHmac("sha256",process.env.SECRETE_KEY)
    const signature = hmac.update(tokenData).digest('base64url')
    if(signature ===  tokenSignature){
      const payload = JSON.parse(atob(encodedPayload))
       Student.findByPk(payload.studentId)
      .then(student=>{
        if(!student){
          res.status(401).json({
            message:"Unathorized"
          })
        }else{
          req.params.id = payload.studentId
          next()
        }
      })
      .catch(err=>{
        res.status(400).json({
          message:"Bad request",
          detail:err
        })
      })
    }
  }
}
const AdminAuth = (req,res,next) =>{
  const token = req.headers.authorization?.slice(7);
  if(!token){
    res.status(401).json({
      message:"Unathorized"
    })
  }else{
    const [encodedHeader,encodedPayload,tokenSignature] = token.split(".")
    const tokenData = `${encodedHeader}.${encodedPayload}`
    const hmac = crypto.createHmac("sha256",process.env.SECRETE_KEY)
    const signature = hmac.update(tokenData).digest('base64url')
    if(signature ===  tokenSignature){
      const payload = JSON.parse(atob(encodedPayload))
       Admin.findByPk(payload.adminId)
      .then(admin=>{
        if(!admin){
          res.status(401).json({
            message:"Unathorized"
          })
        }else{
          req.params.id = payload.adminId
          next()
        }
      })
      .catch(err=>{
        res.status(400).json({
          message:"Bad request",
          detail:err
        })
      })
    }
  }
}
module.exports = { Auth, AdminAuth }