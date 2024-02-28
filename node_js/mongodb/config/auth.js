const localStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// User model
require('../models/User')
const User = mongoose.model('users')


module.exports = (passport) =>{

    passport.use(new localStrategy({usernameField: 'email'}, (email,password, done) =>{
       
        User.findOne({email:email}).then((user) =>{
            if(!user){
                return done(null,false,{message: 'this account does not exist!'})
            }

            bcrypt.compare(password, user.password, (error, same) =>{
              
                if(same){
                    return done(null, user)
                }else{
                    return done(null, false, {message: 'Incorrect password'})
                }
            })
        })
    }))

    passport.serializeUser((user,done)=>{

        done(null,user._id)
    })

    passport.deserializeUser((id, done) => {
        User.findById(id).lean().then((user) => {
            done(null, user)
        }).catch((err) => {
            done(err)
        })
    })
}