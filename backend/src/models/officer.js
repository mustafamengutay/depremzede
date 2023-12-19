const mongoose = require('mongoose')
//const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const officerSchema = new mongoose.Schema({
    Uid: {
        type: Number
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        //unique: true,
        //required: true,
        trim: true,
        lowercase: true,
        /*
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
        */
    },
    password: {
        type: String,
        minlength: 5,
        trim: true,
        default: 0, 
        validate(value) {
            if (value.includes('password')) {
                throw new Error('Password cannot be password')
            }
        }
    },
    dataOfBirth: {
        type: Number,
        minlength: 4,
        trim: true, 
    },
    comeFromCity: {
        type: String,
        trim: true,
    },
    resposibleFromCity: {
        type: String,
        trim: true,
    },
    authorized: {
        type: Boolean,
        default: false
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
})


officerSchema.methods.getPublicProfile = function () {
    const officer = this;
    const officerObject = officer.toObject()

    delete officerObject.password
    //delete officerObject.tokens
    // tokenlerin ver passwordlerin görünmemesi için siliyoruz

    return officerObject
}
/*
officerSchema.methods.toJSON = function () {
    const officer = this;
    const officerObject = officer.toObject()

    delete officerObject.password
    delete officerObject.tokens
    // tokenlerin ver passwordlerin görünmemesi için siliyoruz

    return officerObject
}
eğer bu şekilde yaparsam tüm CRUD operasyonlarına etki eder 
getPublicProfile() methodunu artık router.post('/officers/login'
de kullanmama gerek kalmaz
*/


officerSchema.methods.generateAuthToken = async function () {
    const officer = this;
    const token = jwt.sign({_id: officer._id.toString()}, "abcdefgh")
    officer.tokens = officer.tokens.concat({ token: token })
    await officer.save()

    return token
}
//with this token officer can't truely log out as long as officer login

officerSchema.statics.findByCredentials = async (emailx, password) => {
    const officer = await Officer.findOne({email: emailx})
    
    if(!officer) {
        throw new Error("Unable to login")
    }

    const isMatch = await bcrypt.compare(password, officer.password)
    
    if(!isMatch) {
        throw new Error('Unable to login')
    }
    return officer
}

//hash the plaintext password before sending the DB
officerSchema.pre('save', async function (next) {

    const officer = this

    if (!officer.Uid) {
        const lastOfficer = await Officer.findOne({}, {}, { sort: { Uid: -1 } });

        if (lastOfficer) {
            officer.Uid = lastOfficer.Uid + 1;
        } else {
            officer.Uid = 1;
        }
    }

    if(officer.isModified('password')){
        officer.password = await bcrypt.hash(officer.password, 8)
    }


    next() //i wrote it mean im done with here, end of the function.
})
//since error function doesnt bind we will not use arrow function.


const Officer = mongoose.model('Officer', officerSchema)

module.exports = Officer