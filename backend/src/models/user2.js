const mongoose = require('mongoose');
const validator = require('validator');


/*Konaklama sağlayanlar için kurulmuş model */
const userSchema2 = new mongoose.Schema({
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
    numberOfPeople: {
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
        trim: false
    }
})

const User2 = mongoose.model('User2-Konaklama-Sağlayanlar', userSchema2)

module.exports = User2