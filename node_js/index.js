const express = require('express')
const app = express()
const port = 12345

app.get('/', (req, res) =>{
    
    res.sendFile(__dirname + '/html/index.html')
})

app.get('/teste', (req,res) =>{
    
    res.sendFile(__dirname + '/html/teste.html')
})






//Sempre última linha
app.listen(port, () => {
    console.log(`Server is running at http://Localhost:${port}`)
})