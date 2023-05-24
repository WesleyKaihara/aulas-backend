const jwt = require("jsonwebtoken");

const auth = (req,res,next) => {  
  try {
    const auth = req.headers.authorization;
    const token = auth.split(" ")[1];
  
    jwt.verify(token, process.env.SECRET);

    next();
  } catch (error) {
    res.status(401).send();
  }

}

module.exports = auth;