const {Router} =require('express')
const router = Router()

const auth = require('../middleware/auth.middleware')
const authAdmin = require('../middleware/authAdmin.middleware')
const findControllers = require('../controllers/findControllers')



module.exports = router