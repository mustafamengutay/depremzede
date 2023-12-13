const mongoose = require('mongoose');
const validator = require('validator');


/*is-araci-kullanabilirim için kurulmuş model */
const userSchema4 = new mongoose.Schema({
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
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    type: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: Boolean,
        trim: true,
        default: false
    }
})

const User4 = mongoose.model('User4-is-araci-kullanabilirim', userSchema4)

module.exports = User4