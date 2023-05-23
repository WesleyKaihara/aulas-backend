const jwt = require("jsonwebtoken")
const NotAuthorized = require('../errors/NotAuthorized')

const auth = (req,res,next) => {  
  try {
    const auth = req.headers.authorization
    const token = auth.split(" ")[1]
  
    jwt.verify(token,process.env.SECRET)

    next()
  } catch (error) {
     next(new NotAuthorized())
  }

}

module.exports = auth