const {Router} =require('express')
const router = Router()
const db = require('../models/index')
//const Users = require('../models/users.models')

//const auth = require('../middleware/auth.middleware')
//const authAdmin = require('../middleware/authAdmin.middleware')
//const findControllers = require('../controllers/findControllers')

router.get('/findall',(req,res)=>
    db.Collections.findAll()
    .then(collections => {
        console.log(collections)
        res.sendStatus(200)
    })
        .catch(err => console.log(err)))

router.post('/add', (req,res)=>{
    const {data} = req.body
    db.Collections.create({
        
    })
})


module.exports = router