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
            extname: '.hbs',
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true,
            }
        }))
        app.set('view engine', '.hbs')

//Rotas

    app.get('/', (req, res) => {
        Post.findAll({order: [['id', 'DESC']]}).then((posts) =>{
            res.render('index', {posts: posts})
        })
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
                res.redirect('/')
            }).catch(() =>{
                console.log('error')
            })
            
            console.log(titulo + ' ' + conteudo)
        }
    })

    app.get('/deletar/:id', (req, res) =>{
        post_id = Post.findAll({where: {'id': req.params.id}}).then((post) =>{
            if (post.length > 0){
                Post.destroy({where: {'id': req.params.id}}).then(()=>{
                    res.send('postagem deletada com sucesso')
                }).catch(() =>{
                    res.send('Falha ao deletar a postagem')
                })
            }else{
                res.send('postagem não existe!')
            }
        })
        
    })

// Iniciar o servidor Express
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
