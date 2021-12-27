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

//найти форум
router.get('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const data = await db.Users.findByPk(id)
            if (data) res.send(data)
            else res.status(404).send({message: `Cannot find User with id=${id}.`})
    } catch (e) {
        res.status(500).send({
            message: "Error retrieving User with id=" + id
          })
    }
})

module.exports = router