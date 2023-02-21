const jwt = require('jsonwebtoken');

function verify(req, res, next) {
	const authHeader = req.headers.token;
	if (authHeader) {
		const token = authHeader.split(' ')[1];

		jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
			if (err) res.status(403).json('Token is not valid!');
			req.user = user;
			next();
		});
	} else {
		return res.status(401).json('You are not authenticated!');
	}
}

module.exports = verify;

// const jwt = require("jsonwebtoken")
// const User = require("./models/userSchema");

// const verifyToken = async (req, res, next) =>{
//     try {
//         const token = req.cookies.jwtoken;
//         const verifytoken = jwt.verify(token, process.env.SECRET_KEY);
//         const rootUser = await User.findOne({ _id: verifytoken._id, "tokens.token": token})
//         if(!rootUser){
//             throw new Error("User not found");
//         }
//         req.token = token;
//         req.rootUser = rootUser;
//         req.userID = rootUser._id
//     } catch (error) {
//         res.status(401).send("Unauthorized: no token provided");
//     }
//     next();
// }

// module.exports = verifyToken;