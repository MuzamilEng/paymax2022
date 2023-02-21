// const multer = require("multer")

// require("../imageSchema");
// // Initialize the upload middleware
// const upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//       checkFileType(file, cb);
//     }
//   }).single('image');
  
//   // Check the file type
//   const checkFileType = (file, cb) => {
//     // Allowed file types
//     const filetypes = /jpeg|jpg|png|gif/;
//     // Check the extension
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     // Check the mimetype
//     const mimetype = filetypes.test(file.mimetype);
  
//     if (mimetype && extname) {
//       return cb(null, true);
//     } else {
//       cb('Error: Images Only!');
//     }
//   };

//   module.exports = upload;