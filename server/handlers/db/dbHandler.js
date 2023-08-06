const mongoose = require('mongoose');
dbhandler = {}

const getModel = modelName => require(`../.././handlers/db/models/${modelName}`);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/hebrew', () => {
        console.log('connected to DB!')
    }).then(console.log("nice connection bro"))
    .catch(err => console.log("nope the err is" + err))

dbhandler.getAllDocuments = (modelName) => {
    const Model = getModel(modelName)
    return Model.find()
}

dbhandler.getAllQuotes = (modelName) => {
    const Model = getModel(modelName)
    return Model.find({}, "Quote Injury")
}

dbhandler.findQuotes = (modelName, filter) => {
    const Model = getModel(modelName)
    return Model.find(filter, "Quote Injury")
}

dbhandler.addDocument = (modelName, document) => {
    const Model = getModel(modelName)
    const doc = new Model(document)
    doc.save().then(data => console.log('saved'))
        .catch(err => console.log("error" + err))
    return true
}

dbhandler.findDocument = (modelName, filter) => {
    const Model = getModel(modelName)
    return Model.findOne(filter)

}

dbhandler.findDocuments = (modelName, filter) => {
    const Model = getModel(modelName)
    return Model.find(filter)
}


dbhandler.findDocumentById = (modelName, id) => {
    const Model = getModel(modelName)
    return Model.findById(id)

}

dbhandler.changeTestimonieStatus = (modelName, id, change) => {
    const Model = getModel(modelName)
    return Model.findByIdAndUpdate(id, change, (err, response) => {
        if (err) return err
        return response
    })
}
module.exports = dbhandler