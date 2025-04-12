const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../uploads/');
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const newFileName = `${Date.now()}-${file.originalname}`
    cb(null, newFileName); 
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, 
  fileFilter: function (req, file, cb) {
    const fileTypes = /jpeg|jpg|png|pdf/; 
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb(new Error('File type is not permitted'));
    }
  },
}).single('file')

const middlewareUpload = (req,res,next) =>{
  upload(req,res, err => {
    if (err instanceof multer.MulterError) {
      res.status(400).json({
        message:"Bad request",
        detail:err.message
      })
    } else if (err) {
      res.status(400).json({
        message:"Bad request",
        detail:"Invalid File"
      })
    }
    next()
  })
}
module.exports = middlewareUpload