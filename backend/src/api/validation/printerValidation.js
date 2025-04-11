const printerValidation = (req) =>{
  if (
    ! req.body.model  ||
    ! req.body.brand  ||
    ! req.body.description  ||
    ! req.body.campus ||
    ! req.body.building ||
    ! req.body.room 
  ){
    return false
  }else{
    return true
  }
  
}
module.exports = printerValidation