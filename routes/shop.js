const express = require('express')

const path = require('path')

const rootDir = require('../helpers/path')

const router = express.Router()

router.get('/contact-us',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'))
})

router.post('/success',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))
})

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'))
})

module.exports = router;