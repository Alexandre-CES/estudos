const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('main')
})

router.get('/posts', (req,res) => {
    res.send('posts')
})

router.get('/categories', (req,res) => {
    res.send('categories')
})

module.exports = router