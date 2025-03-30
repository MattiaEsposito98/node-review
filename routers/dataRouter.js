const express = require('express')
const router = express.Router()
const dataController = require('../controllers/dataController')

router.get('/', dataController.index)

router.get('/:id', dataController.show)

module.exports = router