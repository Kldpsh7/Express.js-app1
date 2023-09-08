const express = require('express')

const path = require('path')

const rootDir = require('../helpers/path')

const router=express.Router()

const shopController = require('../controllers/shopController')

router.get('/add-product',shopController.getAddProducts)

router.post('/product',shopController.postProducts)

module.exports = router;