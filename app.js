//const http = require('http')  express will do it internally
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="name" placeholder="Item Name"><br><input type="number" name="size" placeholder="size"><br><button type="submit">ADD</button></form>')
})

app.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    res.send('<h1>Welcome to express</h1>')
})
//const server = http.createServer(app)

//server.listen(4000)    Express app can listen to requests by using http internally
app.listen(4000)