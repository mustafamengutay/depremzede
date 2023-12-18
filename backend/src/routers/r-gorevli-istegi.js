//
//GorevliIstegiModeli'ni kullanarak görevli isteklerini yönetir.
const express = require("express");
const GorevliIstegiModeli = require("../models/m-gorevli-istegi");
const router = new express.Router();

//------------------------------------------------------------------------------

// TUM GOREVLI ISTEKLERINI LISTELE (GET)
router.get("/gorevli-isteklerini-listele", async (req, res) => {
  try {
    const allRecords = await GorevliIstegiModeli.find({});

    res.send(allRecords);
  } catch (error) {
    res.status(500).send(error);
  }
});

//------------------------------------------------------------------------------

// TUM GOREVLI ISTEKLERINI SIL (DELETE)
router.delete("/gorevli-isteklerini-sil", async (req, res) => {
  try {
    await GorevliIstegiModeli.deleteMany({});

    res.send({ message: "Tüm istekler başarıyla silindi." });
  } catch (error) {
    res.status(500).send(error);
  }
});

//------------------------------------------------------------------------------

// GOREVLI CADIR ISTEGI (POST)
router.post("/gorevli-cadir-istegi", async (req, res) => {
  try {
    const { adetSayisi, istenilenBolge } = req.body;

    const sabitDegerler = {
      gorevliAdi: "ISIM SOYISIM",
      urunismi: "ÇADIR",
      kategori: "BARINMA",
    };

    const gorevliIstegi = new GorevliIstegiModeli({
      ...sabitDegerler,
      adetSayisi,
      istenilenBolge,
    });

    await gorevliIstegi.save();

    res.status(201).send(gorevliIstegi);
  } catch (error) {
    res.status(400).send(error);
  }
});

//------------------------------------------------------------------------------

// GOREVLI GIDA ISTEGI (POST)
router.post("/gorevli-gida-istegi", async (req, res) => {
  try {
    const { adetSayisi, istenilenBolge } = req.body;

    const sabitDegerler = {
      gorevliAdi: "ISIM SOYISIM",
      urunismi: "GIDA",
      kategori: "BESLENME",
    };

    const gorevliIstegi2 = new GorevliIstegiModeli({
      ...sabitDegerler,
      adetSayisi,
      istenilenBolge,
    });

    await gorevliIstegi2.save();

    res.status(201).send(gorevliIstegi2);
  } catch (error) {
    res.status(400).send(error);
  }
});

//------------------------------------------------------------------------------

// GOREVLI GIYSI ISTEGI (POST)
router.post("/gorevli-giysi-istegi", async (req, res) => {
  try {
    const { adetSayisi, istenilenBolge } = req.body;

    const sabitDegerler = {
      gorevliAdi: "ISIM SOYISIM",
      urunismi: "GİYSİ",
      kategori: "KIYAFET",
    };

    const gorevliIstegi2 = new GorevliIstegiModeli({
      ...sabitDegerler,
      adetSayisi,
      istenilenBolge,
    });

    await gorevliIstegi2.save();

    res.status(201).send(gorevliIstegi2);
  } catch (error) {
    res.status(400).send(error);
  }
});

//------------------------------------------------------------------------------

// GOREVLI TIBBI-MALZEME ISTEGI (POST)
router.post("/gorevli-tibbiMalzeme-istegi", async (req, res) => {
  try {
    const { urunismi, adetSayisi, istenilenBolge } = req.body;

    const sabitDegerler = {
      gorevliAdi: "ISIM SOYISIM",
      kategori: "Tıbbi Malzeme",
    };

    const gorevliIstegi = new GorevliIstegiModeli({
      ...sabitDegerler,
      urunismi,
      adetSayisi,
      istenilenBolge,
    });

    await gorevliIstegi.save();

    res.status(201).send(gorevliIstegi);
  } catch (error) {
    res.status(400).send(error);
  }
});

//------------------------------------------------------------------------------
module.exports = router;
