const express = require('express');
const router = express.Router();
const User = require('../models/user')

// Storing user data in the database for team creation and checking
router.post('/signup', (req, res) => {
    // find user based on email
    User.findOne({ email: req.body.email }, (err, user) => {

        // if user found wont write anything, else going to write to db
       if (user) {
           res.json(user)

       } else {
            let user = new User(req.body)
            user.save();
            res.json(user)
       }
    })
})

router.post('/diagonalley', (req, res) => {
    // find user
    User.findOne({ email: req.body.email }, (err, user) => {

        if (user.events) {
            let currentUserEvents = [...user.events]
            currentUserEvents.push(0)
            user.events = currentUserEvents
            user.save()

        } else {
            user.events = [0]
            user.save()
        }
        res.json(user)
    })
})

module.exports = router;