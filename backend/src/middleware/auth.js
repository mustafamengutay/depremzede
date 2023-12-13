const jwt = require('jsonwebtoken')
const Officer = require('../models/officer')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'abcdefgh')
        const officer = await Officer.findOne({_id: decoded._id, 'tokens.token': token})

        if(!officer) {
            throw new Error()
        }
        req.token = token
        req.officer = officer
        next()
    } catch (e) {
        res.status(401).send({error: "Please Authenticate."})
    }
}


module.exports = auth



/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY4OWZmZTQ4NGUwMDQ1ZjRiNTdkMDUiLCJpYXQiOjE3MDEzNTgwODN9.i731eGyE0edEmiq6vzLwtgLDij7sCAJMfteooBOa3wM
*/