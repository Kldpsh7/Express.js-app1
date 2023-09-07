const express = require('express')

const router=express.Router()

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="name" placeholder="Item Name"><br><input type="number" name="size" placeholder="size"><br><button type="submit">ADD</button></form>')
})

router.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;