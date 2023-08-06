const express = require('express')
const app = express()
const session = require('express-session')
const signUpRoute = require('./routes/signUpRoute')
const loginUpRoute = require('./routes/loginRoute')
const isLoggedRoute = require('./routes/isLoggedRoute')
const pendingTestimoniesRoute = require('./routes/pendingTestimoniesRoute')

const homeUpRoute = require('./routes/homeRoute')
const testimoniesRoute = require('./routes/testimoniesRoute')
const myTestimoniesRoute = require('./routes/myTestimoniesRoute')


const passport = require('passport')
const users = require('./handlers/db/models/users')
const AuthHandler = require('./handlers/authenticationHandler')
const initializePassport = require('./passport-config')
const flash = require('express-flash')

initializePassport(
    passport,
    name => AuthHandler.findUserBy({ name: name }),
    id => AuthHandler.findDocumentById(id)
)
const PORT = process.env.PORT || 8080;

app.use(flash())
app.use(session({
    secret: "ItsASecret",
    resave: false,
    saveUninitialized: false
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('static'));

app.use(passport.initialize())
app.use(passport.session())


app.get('/logout', function(req, res) {
    req.logout()
    res.redirect('/')
})

app.use('/SignUp', signUpRoute)
app.use('/home', homeUpRoute)
app.use('/login', loginUpRoute)
app.use('/testimonies', testimoniesRoute)
app.use('/myTestimonies', myTestimoniesRoute)
app.use('/isLogged', isLoggedRoute)
app.use('/pendingTestimonies', pendingTestimoniesRoute)

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.listen(PORT, () => console.log(`Server is Listening on port ${PORT}`));