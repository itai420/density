const dbhandler = require('./db/dbHandler')
testimoniesHandler = {}

testimoniesHandler.getTestimonies = () => dbhandler.getAllDocuments('testimonies')


testimoniesHandler.getFilteredTestimonies = (filter) => dbhandler.findDocuments('testimonies',filter)



testimoniesHandler.addTestimony = (testimony) => dbhandler.addDocument('testimonies',testimony)


module.exports = testimoniesHandler