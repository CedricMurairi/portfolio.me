import express from "express"
import blog from "./routes/blog.js"
import activities from "./routes/activities.js"
import dotenv from 'dotenv'
import admin from "./routes/admin.js"
import passport from 'passport';
import flash from 'express-flash';
import session from 'express-session';
import initializePassport from './passport.config.js'

const app = express()
dotenv.config()

const port = process.env.PORT || 3001
initializePassport(
    passport,
    email => userController.findUserByEmail(email),
    id => userController.getUserById(id)
);

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
    res.render('index', { message: "" })
})

app.get('/projects', (req, res) => {
    res.render('projects')
})

app.get('/experiences', (req, res) => {
    res.render('experiences')
})

app.post('/contact-me', (req, res) => {
    messageController.saveMessage(req.body.name, req.body.email, req.body.title, req.body.message);
    res.status(200).json({
        success: true,
        message: "Your message has been received!"
    })
})

app.get('/login', (req, res) => {
    res.render('adminLogin')
})

app.use('/blog', blog)
app.use('/activities', activities)
app.use('/admin', admin)
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})