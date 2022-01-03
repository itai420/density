const dbhandler = require('./db/dbHandler.js')
homeHandler = {}

homeHandler.getQuotes = (filter) => dbhandler.findQuotes('testimonies',filter)

module.exports = homeHandler