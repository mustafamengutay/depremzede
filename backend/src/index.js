const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const officerRouter = require('./routers/officer')
const governmentRouter = require('./routers/government')
const Officer = require('./models/officer')


const app = express()
const port = process.env.PORT || 3000

/*
app.use((req, res, next) => {
    
    if (req.method === 'GET') {
        res.send("GET request are disabled")
    } else{
        next()
    }
})

app.use((req, res, next) => {
    res.status(503).send("The site is currently down.")
})
*/

app.use(express.json())
app.use(userRouter)
app.use(officerRouter)
app.use(governmentRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})















/*
const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = await jwt.sign({_id: "abc123"}, "thisisnewone", {expiresIn: "1 second"})
    //thisisnewone is my signature
    console.log(token);
    const data = await jwt.verify(token, "thisisnewone")
    console.log(data);
}
myFunction()
*/

/*
const bcrypt = require('bcryptjs')
const myFunction = async () => {
    const password = "admin"
    const hashedPassword = await bcrypt.hash(password, 8) //number or rounds we want to perform if its small it will be easy to crack it
                                                        // with encryption algorithm we can reach the actual message but in digest, we can't it is only one way
    console.log(password);
    console.log(hashedPassword);

    const isMatch = await bcrypt.compare('admin', hashedPassword)
    console.log(isMatch);
}
myFunction()

*/