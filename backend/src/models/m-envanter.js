const mongoose = require("mongoose");
//const validator = require('validator')

const EnvanterSchema = new mongoose.Schema({
  fiziksel_İd: {
    type: String,
    required: true,
    trim: true,
  },
  urunismi: {
    type: String,
    required: true,
    trim: true,
  },
  kategori: {
    type: String,
    required: true,
    trim: true,
  },
  adetSayisi: {
    type: String,
    trim: true,
  },
});

const Envanter = mongoose.model("yeni-Envanter", EnvanterSchema);

module.exports = Envanter;
