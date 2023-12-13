const express = require('express')
const Officer = require('../models/officer')
const auth = require('../middleware/auth')
const router = new express.Router()


router.post('/officers/login', async (req, res) => {
    
    try {
        const officer = await Officer.findByCredentials(req.body.email, req.body.password)
        const token = await officer.generateAuthToken()
        res.send({officer: officer.getPublicProfile() ,token})
        //normally res.send({officer ,token}) 
        //with getpublic profile we don't expose all of our information in the login
    } catch (e) {
        return res.status(400).send({ error: 'Für Elise' })
    }

})

router.post('/officers/logout', auth, async (req, res) => {

    try {
        req.officer.tokens = req.officer.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.officer.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})
// maybe we don't need it
router.post('/officers/logoutAll', auth, async (req, res) => {
    
    try {
        // if I delete first created token all of them will be deleted
        req.officer.tokens = []
        await req.officer.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
    
})

router.get('/officers/me' ,auth ,async (req, res) => {
    res.send(req.officer)
})

router.patch('/officers/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'surname', 'phoneNumber', 'email', 'authorized'];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const officer = await Officer.findById(req.params.id)
        updates.forEach((updates) => {
            officer[updates] = req.body[updates]
        })

        await officer.save()
        
        //const officer = await Officer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!officer) {
            return res.status(404).send()
        }

        res.send(officer)
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router;


















/*
router.post('/officers', async (req, res) => {
    const officer = new Officer(req.body)
    //console.log(req.body);
    //console.log(typeof(officer));
    try {
        await officer.save()
        res.status(201).send(officer)
    } catch (e) {
        res.status(400).send(e)
    }
})
*/
