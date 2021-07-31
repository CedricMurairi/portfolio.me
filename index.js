import express from "express"
import blog from "./routes/blog.js"
import activities from "./routes/activities.js"
import dotenv from 'dotenv'
import admin from "./routes/admin.js"
import passport from 'passport';
import flash from 'express-flash';
import session from 'express-session';
import bodyParser from 'body-parser';
import initializePassport from './passport.config.js'
import { getUserById } from './controllers/userController.js'
import { getUserByEmail } from './controllers/userController.js'
import { saveMessage } from './controllers/messageController.js'

const app = express()
dotenv.config()

const port = process.env.PORT || 3005
initializePassport(
    passport,
    email => getUserByEmail(email),
    id => getUserById(id)
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
app.use(bodyParser.json())

if (process.env.PROD) {
    app.get('*', function(req, res) {  
        res.redirect('https://' + req.headers.host + req.url);
    })
}

app.get('/', (req, res) => {
    res.render('index', { message: "" })
})

app.get('/projects', (req, res) => {
    res.render('projects')
})

app.get('/experiences', (req, res) => {
    res.render('experiences')
})

app.post('/contact-me', async (req, res) => {
    let result = await saveMessage(req.body);
    if (result) {
        res.status(200).json({
            success: true,
            message: "Your message has been received!"
        })
    }else{
        res.status(400).json({
            success: false,
            message: "Bad Request!"
        })
    }
})

app.use('/blog', blog)
app.use('/activities', activities)
app.use('/admin', admin)
app.use(express.static('public'))

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})