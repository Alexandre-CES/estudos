const express = require('express')
const app = express()
const port = 12345

const Post = require('./models/Post')

//Config
    //Express
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())

    // Template Engine
        const hbs = require('express-handlebars')
        app.engine('.hbs', hbs.engine({
            defaultLayout:'main',
            extname: '.hbs'
        }))
        app.set('view engine', '.hbs')

//Rotas

    app.get('/', (req, res) => {
        res.render('index')
    })

    app.all('/formulario', (req, res) => {
        if (req.method === 'GET') {
            res.render('formulario')
        } else if (req.method === 'POST') {
            const titulo = req.body.titulo
            const conteudo = req.body.conteudo
            Post.create({
                titulo: titulo,
                conteudo: conteudo
            }).then(() =>{
                console.log('success')
            }).catch(() =>{
                console.log('error')
            })
            
            console.log(titulo + ' ' + conteudo)
        }
    })

// Iniciar o servidor Express
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
