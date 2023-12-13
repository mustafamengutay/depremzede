const mongoose = require('mongoose');
const validator = require('validator');


/*Giysi sağlayanlar için kurulmuş model */
const userSchema3 = new mongoose.Schema({
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
    description: {
        type: String,
        trim: false
    },
})

const User3 = mongoose.model('User3-Giysi-Sağlayanlar', userSchema3)

module.exports = User3