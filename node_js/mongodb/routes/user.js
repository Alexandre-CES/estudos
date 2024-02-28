const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/User')
const User = mongoose.model('users')

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

    if(!req.body.password || typeof req.body.password == undefined || req.body.pasword == null){
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

            }
        }).catch((err)=>{
            req.flash('error_msg', 'Internal error: '+err)
            res.redirect('/users/register')
        })

    }
})

module.exports = router