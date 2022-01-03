const express =require('express');
const router = express.Router();
const myHandler=require('../handlers/authenticationHandler')
const bcrypt= require('bcryptjs')
const path = require('path');


function IsOut(req,res,next){
  if(!req.isAuthenticated()) return next();
  res.redirect('/')
}


router.post('/', async (req, res) => {

  const hashedPassword = await bcrypt.hash(req.body.password,10)
  const exist= await myHandler.byMailOrName(req.body.name,req.body.email)
  if(exist) return res.send(false)
  return res.send(myHandler.addUser({
    name:req.body.name,
    password: hashedPassword,
    email:req.body.email,
    manager:false
  }))



})


router.get('/',IsOut, (req, res) => {
    res.sendFile('/client/SignUp.html', { root: path.resolve(__dirname,'../../') });
});

module.exports=router