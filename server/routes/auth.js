const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();


// User model
const User = require('../models/userSchema');

router.post('/signup', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      })
      console.log(newUser)

      try {
        const user = await newUser.save();
        res.status(200).json(user)
      } catch (error) {
        res.status(500).json(error)
      }
  
  });
// @route   POST api/auth
// @desc    Authenticate user
// @access  Public
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  User.findOne({ username, password }).then(user => {
    console.log(username + password);
    // Check if user exists
    if (!user) {
      return res.status(400).json({ msg: 'User does not exist' });
    }

    // Check password
    if (password !== user.password) {
      return res.status(400).json({ msg: 'Invalid password' });
    }
  });
});
 
// delete user 

router.post("/delete", async(req, res)=>{
  
  const { password } = req.body;
  console.log("here it is :"+ password)

  const user = await User.findOne({ password })
  console.log(user);

  if(!user){
    return res.status(400).json({msg: "user not found"})
  }
  if(password == user.password){


    
  const Delete = await User.findByIdAndDelete(user.id);
  console.log(Delete);
  return res.status(200).json({msg: "user deleted successfully"})
  }
  else{
    return res.status(404).json({msg:"password not matched"});
  }



})

// Image Upload 2      --------------------------------------

// const Image = require("../models/imageSchema");
// const multer = require("multer")
// const upload = multer({ dest : "images/"})

// router.post("/uploadimg",upload.single("image"), async(req, res) => {
//   console.log(req.file, req.body);
//   const title = req.body.title;
//   const imgUrl = req.file.path;
//   console.log("image url hai ",req.file.path)

//   const newUserData = {
//     imgUrl,
//     title,
//   };

//   const newUser = new Image(newUserData);
//   console.log("this is new user", newUser);
//   newUser.save()
//     .then(() => res.json("User Added"))
//     .catch((err) => res.status(400).json("Error: " + err));

//   });
  // const title = req.body.title;
  // const image = req.file.filename;
  // console.log("yes in upload")

  // console.log("data hai ye",)

  // const newUserData = {
  //   name,
  //   birthdate,
  //   photo,
  // };

  // const newUser = await new Image(newUserData);
  // console.log("this is new user", newUser);

  // newUser
  //   .save()
  //   .then(() => res.json("User Added"))
  //   .catch((err) => res.status(400).json("Error: " + err));



// const Image = require("../models/imageSchema");
// const multer = require("multer");
// const { v4: uuidv4 } = require("uuid");
// let path = require("path");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "images");
//   },
//   filename: function (req, file, cb) {
//     cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
//   if (allowedFileTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// let upload = multer({ storage, fileFilter });

// router.post("/uploadimg",upload.single("photo"), async(req, res) => {
//   const photo = req.body.photo;
//   console.log("yes in upload") 

//   console.log("data hai ye",name,photo,birthdate)


//   const newUserData = {
//     photo,
//   };

//   const newUser = await new Image(newUserData);
//   console.log("this is new user", newUser);


//   newUser
//     .save()
//     .then(() => res.json("User Added"))
//     .catch((err) => res.status(400).json("Error: " + err));
// });




// new image 
const Image = require("../models/imageSchema");
const multer = require("multer");
const path = require("path");

// Set storage engine
const storage = multer.diskStorage({
  destination: "images/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Set file size limit (in bytes)
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("image");

// Check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

// Handle image upload
router.post("/uploadimg", (req, res) => {
  const image = req.file;
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ msg: err });
    } else {
      if (req.file === undefined) {
        res.status(400).json({ msg: "Error: No file selected!" });
      } else {
        const newImage = new Image(image);
        newImage.save();
        res.json({ image });
        console.log(req.file)
      }
    }
  });
});

module.exports = router;
