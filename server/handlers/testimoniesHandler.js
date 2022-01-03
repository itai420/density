const dbhandler = require('./db/dbHandler')
testimoniesHandler = {}

testimoniesHandler.getTestimonies = () => dbhandler.getAllDoucuments('testimonies')


testimoniesHandler.getFilteredTestimonies = (filter) => dbhandler.findDoucuments('testimonies',filter)



testimoniesHandler.addTestimony = (testimony) => dbhandler.addDoucument('testimonies',testimony)


module.exports = testimoniesHandler