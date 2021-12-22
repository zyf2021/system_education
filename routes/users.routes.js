const {Router} =require('express')
const router = Router()
const db = require('../models/index')
//const Users = require('../models/users.models')

//const auth = require('../middleware/auth.middleware')
//const authAdmin = require('../middleware/authAdmin.middleware')
//const findControllers = require('../controllers/findControllers')

router.get('/',(req,res)=>
    db.Users.findAll()
    .then(users => {
        console.log(users)
        res.sendStatus(200)
    })
        .catch(err => console.log(err)))

module.exports = router