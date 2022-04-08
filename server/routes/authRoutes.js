const express = require('express')

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user')

const router = express.Router()

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'},
    function(username, password, done) {
        //console.log('Passport is trying to verify a email', email)
        //User.findUserByEmail(email)
        User.findUserByEmail(username)
        .then((user) => {
            console.log(user)
            if (!user || (user.password !== password)) {
                //console.log(user.email)
                done(null, false, {message: 'Username not found or password mismatch'})
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

router.get('/logout', function(req, res){
    console.log("get server logout")
    req.logout();
    res.redirect('/')
  });
//Login authentication => /auth/login
router.post('/login', passport.authenticate('local'), function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    console.log('User login has succeeded!')
    console.log('Req.user is', req.user)
    console.log("res.json",res.json(req.user))
    res.json(req.user)
  })


// Create new user => /auth/newUser
router.post('/newUser', async (req, res) => {
    let newUser = req.body
    console.log(newUser)
    let userId = await User.createUser(newUser)
    res.send(userId)
})

// List user => /auth/userList
router.get('/userList', async (req, res) => {
    let userList = await User.listUsers()
    res.send(userList)
})

router.get('/loggedInUser', function(req, res) {
  
    res.send(req.user)
}) 

module.exports = router