import express from "express"
import passport from "passport"
import { getMessages } from '../controllers/messageController.js'
import { getUsers } from '../controllers/userController.js'
import bcrypt from 'bcrypt'

const admin = express.Router()

// admin.get('/', (req, res) => {
//     res.redirect('/admin/messages')
// })

admin.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('adminLogin')
})

admin.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/admin/messages',
    failureRedirect: '/admin/login',
    failureFlash: true
}))

admin.get('/logout', (req, res) => {
    req.logOut()
    res.redirect('/admin/login')
})

admin.get('/messages', checkAuthenticated, async (req, res) => {
    let messages = await getMessages()
    res.render('messages', { messages: messages })
})

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/admin/login')
}

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/admin/messages')
    }
    next()
}

export default admin