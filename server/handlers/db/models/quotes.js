const mongoose = require('mongoose')

const QuotesUserSchema = mongoose.Schema({
    full: { type: String, required: false },
    Short: { type: String, required: true },
},{collection:'QUOTES'});

module.exports = mongoose.model('QUOTES',QuotesUserSchema);
