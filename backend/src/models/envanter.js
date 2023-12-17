const mongoose = require('mongoose')
//const validator = require('validator')



const EnvanterSchema = new mongoose.Schema({
    urunId: {
        type: Number
    },
    urunIsmi: {
        type: String,
        trim: true
    },
    kategori: {
        type: String,
        trim: true
    },
    adeti: {
        type: String,
        required: true,
        trim: true
    }
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