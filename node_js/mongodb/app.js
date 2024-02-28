//Loading Modules
    const express = require('express')
    const handlebars = require('express-handlebars')
    const app = express()
    const admin = require('./routes/admin')
    const path = require('path')
    const mongoose = require('mongoose')
    const session = require('express-session')
    const flash = require('connect-flash')
    require('./models/Post')
    const Post = mongoose.model('posts')
    require('./models/Category')
    const Category = mongoose.model('categories')
    const users = require('./routes/user')
    const passport = require('passport')
    require('./config/auth')(passport)

//Configuration
    //Sessão
        app.use(session({
            secret: 'segredosecreto',
            resave: true,
            saveUninitialized: true
        }))

        app.use(passport.initialize())
        app.use(passport.session())

        app.use(flash())
    //Middleware
        app.use((req,res,next)=>{
            res.locals.success_msg = req.flash('success_msg')
            res.locals.error_msg = req.flash('error_msg')
            res.locals.error = req.flash('error')
            res.locals.user = req.user || null
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
        mongoose.connect('mongodb://127.0.0.1:27017/teste-blogapp').then(() =>{
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
    app.get('/', (req,res) =>{
        Post.find().lean().populate({path:'category', strictPopulate: false}).sort({date: 'desc'}).then((posts)=>{
            res.render('index', {posts:posts})
        }).catch((err)=>{
            req.flash('error_msg', 'Internal error: '+err)
            res.redirect('/404')
        })
    })

    app.get('/post/:slug', (req,res)=>{
        Post.findOne({slug:req.params.slug}).lean().then((post)=>{
            if(post){
                res.render('post/index', {post:post})
            }else{
                req.flash('error_msg', `This post doesn't exist`)
                res.redirect('/')
            }
        }).catch((err)=>{
            req.flash('error_msg', `Internal error: ${err}`)
            res.redirect('/')
        })
    })

    app.get('/posts', (req,res) =>{
        res.render('posts')
    })

    app.get('/categories', (req,res)=>{
        Category.find().lean().then((categories)=>{
            res.render('categories/index', {categories:categories})

        }).catch((err)=>{
            req.flash('error_msg', 'Internal error: '+err)
            res.redirect('/')
        })
    })

    app.get('/categories/:slug', (req,res)=>{
        Category.findOne({slug:req.params.slug}).lean().then((category)=>{
            if(category){
                
                Post.find({category:category._id}).lean().then((posts)=>{
                    
                    res.render('categories/posts', {posts:posts, category:category})
                }).catch((err)=>{
                    req.flash('error_msg', 'Internal error: '+err)
                    res.redirect('/categories')
                })
            }else{
                req.flash('error_msg', 'This category does not exist!')
                res.redirect('/categories')
            }
        }).catch((err)=>{
            req.flash('error_msg', 'Internal error: '+err)
            res.redirect('/')
        })
    })

    app.get('/404', (req,res)=>{
        res.send('error 404')
    })

    app.use('/admin', admin)
    app.use('/users', users)

//Others
const PORT = 8021
app.listen(PORT, () =>{
    console.log(`Server running at: http://localhost:${PORT}`)
})