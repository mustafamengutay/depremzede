const mongoose = require("mongoose");
const validator = require("validator");

//GOREVLI ISTEKLERI SEMASI
const gorevliIstegiSchema = new mongoose.Schema({
  gorevliAdi: {
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
  istenilenBolge: {
    type: String,
    required: true,
    trim: true,
  },
});

const GorevliIstegiModeli = mongoose.model(
  "gorevli-istekleri",
  gorevliIstegiSchema
);

module.exports = GorevliIstegiModeli;
