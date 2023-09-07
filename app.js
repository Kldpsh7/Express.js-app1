//const http = require('http')  express will do it internally
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:false}))
const adminRouter = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')

app.use(adminRouter)
app.use(shopRouter)
app.use((req,res,next)=>{
    res.status('404').send('<h1>ERROR 404 : Page Not Found</h1>')
})

app.listen(4000)