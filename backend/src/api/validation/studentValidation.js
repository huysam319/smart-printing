const  studentValidation = (req) =>{
  if (
    !req.body.id || 
    !req.body.name || 
    !req.body.faculity || 
    !req.body.major || 
    !req.body.email || 
    !req.body.passwd
  ){
    return false
  }
  return true
}
module.exports = studentValidation