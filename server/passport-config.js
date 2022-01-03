const { authenticate } = require('passport/lib');
const bcrypt = require('bcryptjs');
const myHandler = require('./handlers/authenticationHandler');

const localStrategy = require('passport-local').Strategy



function initialize(passport, findByName, getUserById) {
    console.log("trying initizlize")

    const authenticateUser = async (name, password, done) => {
        console.log("trying authenticate in passportconfig")

        const user = await findByName(name)
        console.log(user)
        if (!user) {
            console.log("no user with that name")
            return done(null, false);
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log("there is a user with that name")
        console.log("the password is" + hashedPassword)
        try {
             const IsSame= await bcrypt.compare(password, user.password)
            if (IsSame) {
                return done(null, user);
            } else {
                return done(null, false);
            }

        } catch (error) {
            return done(error)
        }
    }


    passport.use(new localStrategy({ usernameField: 'name' }, authenticateUser))

    passport.serializeUser((user, done) => {
        console.log('ser')
        return done(null, user._id)
    })
    passport.deserializeUser(async (id, done) => {
        console.log('des')
        const user= await getUserById(id)
       return done(null, user)
    })


}

module.exports = initialize