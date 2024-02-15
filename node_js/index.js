const express = require('express')
const app = express()
const port = 12345

app.get('/:sus', (req, res) =>{
    res.send('sas?'+req.params.rolas)
})








//Sempre última linha
app.listen(port, () => {
    console.log(`Server is running at http://Localhost:${port}`)
})