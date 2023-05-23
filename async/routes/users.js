const NotAuthorized = require('../errors/NotAuthorized')

const { createUser, findUserByEmail } = require('../db/user')

const express = require('express')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = express.Router()

router.post("/user", async(req,res) => {
  const user = req.body
  const hashedPassword = bcrypt.hashSync(user.password,10)
  user.password = hashedPassword
  await createUser(user)
  res.status(201).send()
})

router.post("/login", async(req,res,next) => {
  const { email,password } = req.body
  try {
    const user = await findUserByEmail(email)
  
    if(!user) throw new NotAuthorized()
  
    const isEqual = bcrypt.compareSync(password,user.password)
    if(!isEqual) throw new NotAuthorized()
    
    const payload = {
      id: user.id,
      name: user.name
    }
    
    const token = jwt.sign(payload,process.env.SECRET)
    res.json({
      token
    })
  } catch (error) {
    next(error)
  }

})

module.exports = router