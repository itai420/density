const express =require('express');
const router = express.Router();
const users =require('../handlers/db/models/users')
const myHandler=require('../handlers/authenticationHandler')
const bcrypt= require('bcryptjs')
const passport=require('passport')
const initializePassport= require('../passport-config')
const AuthHandler=require('../handlers/authenticationHandler')
const path = require('path');


function IsOut(req,res,next){
    if(!req.isAuthenticated()) return next();
    res.redirect('/')
}

router.get('/', IsOut, (req, res) => {
    console.log(req.flash())
    return res.sendFile('/client/login.html', { root: path.resolve(__dirname,'../../') });
});

router.post('/',passport.authenticate('local',{
    successRedirect:'/login/successLogin',
    failureRedirect:'/login/faillogin',
    failureFlash:true
}))

router.get('/failLogin', (req, res) => {
    const ERROR = req.flash()
    return res.send(false)
})
router.get('/successLogin', (req, res) => {
    return res.send(true)
})

module.exports=router