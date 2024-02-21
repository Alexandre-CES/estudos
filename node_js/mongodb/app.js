//Loading Modules
    const express = require('express')
    const handlebars = require('express-handlebars')
    const app = express()
    const admin = require('./routes/admin')
    //const mongoose = require('mongoose')

//Configuration
    //Body Parser
        app.use(express.urlencoded({extended: true}))
        app.use(express.json())
    //Handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout:'main'}))
        app.set('view engine', 'handlebars')
    //Mongoose
        //coming Soon
//Routes
    app.use('/admin', admin)

//Others
const PORT = 8021
app.listen(PORT, () =>{
    console.log(`Server running at: http://localhost:${PORT}`)
})