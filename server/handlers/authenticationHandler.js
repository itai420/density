const dbhandler = require('./db/dbHandler')
authenticationHandler = {}
authenticationHandler.byMailOrName = async (userName, userMail) => {
    console.log(userName)
    return dbhandler.findDocument('users',{$or:[{name:userName},{email:userMail}]})

}
authenticationHandler.addUser = user => dbhandler.addDocument('users', user)

authenticationHandler.IsExist = async (userName, userPassword) => {
    const exist = await dbhandler.findDocument('users', { $and: [{ name: userName }, { password: userPassword }] })
    if (exist) return ("ok")
    return "no"
}
authenticationHandler.findUserBy = (filter) => {
    return dbhandler.findDocument('users', filter)
}

authenticationHandler.findDocumentById = (id) => {
    return dbhandler.findDocumentById('users', id)
}


module.exports = authenticationHandler