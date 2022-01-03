const express =require('express');

const router = express.Router();

function IsIn(req,res,next){
    if(req.isAuthenticated()) return next();
    res.redirect('/login')
}




router.post('/', async (req, res) => {
    if(req.body.Question==="log") return res.send(req.user)
    return res.send(req.user.manager)
})


module.exports=router