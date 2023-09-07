//const http = require('http')  express will do it internally
const express = require('express')

const app = express()

app.use((req,res,next)=>{  //middleware
    console.log('First Middleware')
    next()                 //allows to go to next middleware
})
app.use((req,res,next)=>{
    console.log('Second Middleware')
    res.send({key:'value'})
})
//const server = http.createServer(app)

//server.listen(4000)    Express app can listen to requests by using http internally
app.listen(4000)