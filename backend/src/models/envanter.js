/*
const mongoose = require('mongoose')
//const validator = require('validator')

const EnvanterSchema = new mongoose.Schema({
    urunId: {
        type: Number
    },
    inventoryName: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    type: {
        type: String,
        trim: true
    },
    stock: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
})

EnvanterSchema.pre('save', async function (next) {

    const envanter = this
    if (!envanter.urunId) {
        const lastEnvanter = await Envanter.findOne({}, {}, { sort: { urunId: -1 } });

        if (lastEnvanter) {
            envanter.urunId = lastEnvanter.urunId + 1;
        } else {
            envanter.urunId = 1;
        }
    }
    next()
})


const Envanter = mongoose.model('Envanter', EnvanterSchema)

module.exports = Envanter
*/
