const mongoose = require('mongoose');
const validator = require('validator');


/*Enkaz altında olanlar için kurulmuş model */
const userSchema1 = new mongoose.Schema({
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
        trim: false,
        default: false,
    }
})

userSchema1.pre('save', async function (next) {

    const user = this

    if (!user.Uid) {
        const lastUser = await User1.findOne({}, {}, { sort: { Uid: -1 } });

        if (lastUser) {
            user.Uid = lastUser.Uid + 1;
        } else {
            user.Uid = 1;
        }
    }

    next() //i wrote it mean im done with here, end of the function.
})

const User1 = mongoose.model('Userlar-icin-User-Enkaz-altinda', userSchema1)

module.exports = User1
