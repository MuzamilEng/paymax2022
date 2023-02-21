const jwt = require('jsonwebtoken')
const User = require('../userSchema')

const Authenticate = async(req, res, next) =>{
    try{
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
    const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token" : token})

    if(!rootUser) {throw new Error('no user found')}

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    }
    catch(err) {
       res.status(400).send("no token")
    }
    next()
}
module.exports = Authenticate;