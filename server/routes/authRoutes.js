const express = require('express')

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user')

const router = express.Router()

passport.use(new LocalStrategy(
    function(email, password, done) {
        console.log('Passport is trying to verify a email', email)
        User.findUserByEmail(email)
        .then((user) => {
            if (!user || (user.password !== password)) {
                console.log(user.email)
                done(null, false, {message: 'Email not found or password mismatch'})
                return
            }
            done(null, user)
        })
        .catch(done)
    }
))

passport.serializeUser(function(user, done) {
    console.log('passport wants to store this user in a cookie', user)
    done(null, user.id)
})
  
passport.deserializeUser(function(id, done) {
    console.log('passport is trying to recover the user from the cookie', id)
    User.findById(id)
    .then((user) => {
        if (!user) {
            done(new Error('User not found or deleted'))
            return
        }
        done(null, user);
    })
    .catch(done)
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log('User login has succeeded!')
    console.log('Req.user is', req.user)
    res.sendStatus(200)
  })


// Create new user => /user/newUser
router.post('/newUser', async (req, res) => {
    let newUser = req.body
    console.log(newUser)
    let userId = await User.createUser(newUser)
    res.send(userId)
})
router.get('/loggedInUser', function(req, res) {
    res.send(req.user)
}) 

module.exports = router