const dbhandler = require('./db/dbHandler')
myTestimoniesHandler = {}

myTestimoniesHandler.getMyTestimonies = (mail) => dbhandler.findDocuments('testimonies',mail)




module.exports = myTestimoniesHandler