const dbhandler = require('./db/dbHandler')
authenticationHandler = {}
authenticationHandler.byMailOrName = async (userName, userMail) => {
    console.log(userName)
    return dbhandler.findDoucument('users',{$or:[{name:userName},{email:userMail}]})

}
authenticationHandler.addUser = user => dbhandler.addDoucument('users', user)

authenticationHandler.IsExist = async (userName, userPassword) => {
    const exist = await dbhandler.findDoucument('users', { $and: [{ name: userName }, { password: userPassword }] })
    if (exist) return ("ok")
    return "no"
}
authenticationHandler.findUserBy = (filter) => {
    return dbhandler.findDoucument('users', filter)
}

authenticationHandler.findDoucumentById = (id) => {
    return dbhandler.findDoucumentById('users', id)
}


module.exports = authenticationHandler