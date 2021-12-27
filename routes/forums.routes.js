const {Router} =require('express')
const router = Router()
const db = require('../models/index')
//const Users = require('../models/users.models')

//const auth = require('../middleware/auth.middleware')
//const authAdmin = require('../middleware/authAdmin.middleware')
//const findControllers = require('../controllers/findControllers')

//создать форум

//найти все форумы
router.get('/list', async (req,res) => {
    try {
        const data = await db.Forums.findAll()
        res.send(data)
    } catch (e) {
        res.status(500).send({message: e.message || "Some error occurred while retrieving tutorials."})
    }
})

//найти форум
router.get('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const data = await db.Forums.findByPk(id)
            if (data) res.send(data)
            else res.status(404).send({message: `Cannot find Forum with id=${id}.`})
    } catch (e) {
        res.status(500).send({
            message: "Error retrieving Forum with id=" + id
          })
    }
})

//найти форумы на которые подписан пользователь

//создать сообщение на форуме forumId, userId
router.post('/createmessage', async (req,res) => {
    try{
        const {userId, forumId,text} = req.body
        db.MessagesForum.create({
            userId,
            forumId,
            text
        })
        res.status(201).json({message:'Сообщение создано'})
    } catch(e){

    }
})

//вывести список сообщений на форуме forumId 
router.get('/:id/listmessages', async (req,res) => {
    try{
        const forumId = req.params.id
        data = await db.MessagesForum.findAll({
           where:{ forumId:forumId }
        })
        res.send(data)
    } catch(e){
        res.status(500).send({
            message:
              e.message || "Some error occurred while find messages."
          });
    }
})




module.exports = router