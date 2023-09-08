//const http = require('http')  express will do it internally
const express = require('express')
const path = require('path')
const rootDir = require('./helpers/path')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
const adminRouter = require('./routes/admin.js')
const shopRouter = require('./routes/shop.js')
const errorController = require('./controllers/errorController')

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRouter)
app.use(shopRouter)
app.use(errorController.get404)

app.listen(4000)