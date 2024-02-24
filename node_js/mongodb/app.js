//Loading Modules
    const express = require('express')
    const handlebars = require('express-handlebars')
    const app = express()
    const admin = require('./routes/admin')
    const path = require('path')
    const mongoose = require('mongoose')
    const session = require('express-session')
    const flash = require('connect-flash')

//Configuration
    //Sessão
        app.use(session({
            secret: 'segredosecreto',
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    //Middleware
        app.use((req,res,next)=>{
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            next()
        })
    //Body Parser
        app.use(express.urlencoded({extended: true}))
        app.use(express.json())
    //Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout:'main'}))
        app.set('view engine', 'handlebars')
    //Mongoose
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://127.0.0.1:27017/blogapp').then(() =>{
            console.log('Mongo connected')
        }).catch((err) =>{
            console.log(`Error: ${err}`)
        })
    //Public
    app.use(express.static(path.join(__dirname, 'public')))

    app.use((req, res, next) =>{
        console.log('Loading')
        next()
    })

//Routes
    app.use('/admin', admin)

//Others
const PORT = 8021
app.listen(PORT, () =>{
    console.log(`Server running at: http://localhost:${PORT}`)
})