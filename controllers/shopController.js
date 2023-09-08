const path = require('path')

const rootDir = require('../helpers/path')

exports.getAddProducts = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'))
}

exports.postProducts = (req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
}

exports.getContactUs = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact-us.html'))
}

exports.postSuccess = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','success.html'))
}

exports.getHome = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'))
}