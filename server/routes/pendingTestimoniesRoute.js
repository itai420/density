const express =require('express');
const router = express.Router();
const myHandler=require('../handlers/pendingTestimoniesHandler');
const testimonies = require('../handlers/db/models/testimonies');
const path = require('path');


function Ismanager(req,res,next){

    if(req.user&&req.user.manager) return next();
    res.redirect('/login')
}


router.get('/',Ismanager, (req, res) => {
    return res.sendFile('/client/pendingTestimonies.html', { root: path.resolve(__dirname,'../../') });
});



router.post('/',Ismanager, async (req, res) => {
res.send(await myHandler.changeTestimonieStatus(req.body.tetimonieId,req.body.change))
})




module.exports=router