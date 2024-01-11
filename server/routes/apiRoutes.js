const express = require('express')
const router = express.Router()
const apiController = require('../controllers/apiController')

router.route('/search')
    .post(apiController.searchResults)

module.exports = router
