const express = require('express')

const path = require('path')

const rootDir = require('../helpers/path')

const router = express.Router()

const shopController = require('../controllers/shopController')

router.get('/contact-us',shopController.getContactUs)

router.post('/success',shopController.postSuccess)

router.get('/',shopController.getHome)

module.exports = router;