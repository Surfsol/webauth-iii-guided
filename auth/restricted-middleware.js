
const jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
  
  const token = req.headers.authorization

  if (token) {
  
  const secret = process.env.JWT_SECRET || "aslskek34l4kfnad";
    //check token is valid
    jwt.verify(token, secret, (err, decodedToken) => {
      if(err){
        res.status(401).json({message: "Invalid Credentials"})
      } else {
        req.decodeJwt = decodedToken;
        next()
      }
    })
  } else {
    res.status(400).json({message: "no credential provided"})
  }

};
