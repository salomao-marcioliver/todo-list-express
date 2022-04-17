const express = require('express')
const router = express.Router();

const Checklist = require('../models/checklist')

router.get('/', (req,res) => {
    console.log("Passei por aqui")
    res.send()
})

router.post('/', async (req, res) => {
    console.log(`A rota do tipo POST foi acessada!`)
    let { name } = req.body
    try {
        let checklist = await Checklist.create({ name })
        res.status(200).send(checklist)
    }catch(e){
        res.status(422).json(error)
        console.log(e)
    }
    
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    res.send(`ID: ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    console.log(req.body)
    res.send(`ID: ${req.params.id}`)
})

module.exports = router;