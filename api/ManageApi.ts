// Import Dependencies
import express from 'express'
const router = express.Router()

// Controllers
const manageApiController = require('./controller/ManageApiController')

router.get('/', manageApiController.manageApi)

module.exports = router;
