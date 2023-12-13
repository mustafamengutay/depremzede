const mongoose = require('mongoose');
const validator = require('validator');


/*Enkaz altında olanlar için kurulmuş model */
const userSchema = new mongoose.Schema({
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
    kisiSayisi: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    ilanDurumu: {
        type: Boolean,
        trim: false
    }
})


const User = mongoose.model('User-Enkaz-altinda', userSchema)

module.exports = User
