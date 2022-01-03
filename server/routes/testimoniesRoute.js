const express = require('express');
const router = express.Router();
const myHandler = require('../handlers/testimoniesHandler');
const testimonies = require('../handlers/db/models/testimonies');
const path = require('path');



router.get('/', (req, res) => {
    return res.sendFile('/client/testimonies.html', { root: path.resolve(__dirname, '../../') });
});



router.post('/', async(req, res) => {
    const tesArr = await myHandler.getFilteredTestimonies(req.body.filter)
    return res.send(tesArr)
})


router.post('/addTestimonies', async(req, res) => {
    if (!req.user) return ("you came to the wrong house boy")
    const { name, age, sports, levelOfActivity, days, bagsQuantity, pillsQuantity, Quote, typeOfInjury, LevelOfInjury } = req.body
    const Email = req.user.email
    const Approved = req.user.manager ? "מאושר" : "מחכה לאישור"
    Profile = { name, age, sports, levelOfActivity }
    Injury = { typeOfInjury, LevelOfInjury }
    time = (days == 1 ? days + ' יום' : days + ' ימים')

    Treatment = { bagsQuantity, pillsQuantity, time }

    const testimony = {
        Email,
        Profile,
        Injury,
        Treatment,
        Quote,
        Approved
    }
    myHandler.addTestimony(testimony)
    res.redirect('/testimonies')
})



module.exports = router