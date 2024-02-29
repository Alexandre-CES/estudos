const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/User')
const User = mongoose.model('users')
const bcrypt = require('bcryptjs')
const passport = require('passport')

router.get('/register', (req,res)=>{
    res.render('users/register')
})

router.post('/register', (req,res)=>{
    var errors = []

    if(!req.body.name || typeof req.body.name == undefined || req.body.name == null){
        errors.push({text:'Invalid Name'})
    }

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        errors.push({text:'Invalid Email'})
    }

    if(!req.body.password || typeof req.body.password == undefined || req.body.password == null){
        errors.push({text:'Invalid Password'})
    }

    if(req.body.password.length < 4){
        errors.push({text:'too short password'})
    }

    if(req.body.password != req.body.password2){
        errors.push({text:'Passwords must be the same!'})
    }

    if(errors.length > 0){

        res.render('users/register', {errors:errors})

    }else{

        User.findOne({email:req.body.email}).then((user)=>{
            if(user){
                req.flash('error_msg', 'Email already exist!')
                res.redirect('/users/register')
            }else{

                var salt = bcrypt.genSaltSync(10)
                var hash = bcrypt.hashSync(req.body.password, salt)
               
               const UserData = {
                   name : req.body.name,
                   email : req.body.email,
                   password : hash
                }
               
               
                new User(UserData).save().then(() => {
                    req.flash('success_msg', 'User registered successfully!')
                    res.redirect('/')
                }).catch((err) => {
                    req.flash('error_msg', 'Error registering user: '+err)
                    res.redirect("/usuarios/registro")
                })

            }
        }).catch((err)=>{
            req.flash('error_msg', 'Internal error: '+err)
            res.redirect('/users/register')
        })
    }
})

router.get('/login', (req, res)=>{
    res.render('users/login')
})

router.post('/login', (req,res,next)=>{

    passport.authenticate('local', {
        successRedirect:'/',
        failureRedirect:'/users/login',
        failureFlash: true
    })(req,res,next)
})

router.get("/logout", (req,res,next)=>{
    req.logOut((err)=>{
        if(err){return next(err)}    
            req.flash('success_msg','')
            res.redirect("/")
    })
})

module.exports = router