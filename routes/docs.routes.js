const {Router} =require('express')
const router = Router()
const db = require('../models/index')
//const Users = require('../models/users.models')

//const auth = require('../middleware/auth.middleware')
//const authAdmin = require('../middleware/authAdmin.middleware')
//const findControllers = require('../controllers/findControllers')

router.get('/findall',(req,res)=>
    db.Docs.findAll()
    .then(docs => {
        console.log(docs)
        res.sendStatus(200)
    })
        .catch(err => console.log(err)))

module.exports = router