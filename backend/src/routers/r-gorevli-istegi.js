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

// Belirli bir GOREVLI ISTEĞINI SIL (DELETE)
router.delete("/gorevli-istegi-sil/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const gorevliIstegi = await GorevliIstegiModeli.findOneAndDelete({ _id });

    if (!gorevliIstegi) {
      return res.status(404).send({ message: "İstek bulunamadı." });
    }

    res.send({ message: "İstek başarıyla silindi.", deleted: gorevliIstegi });
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
      fiziksel_İd: "100",
      gorevliAdi: "ISIM SOYISIM",
      urunismi: "Çadır",
      kategori: "Barınma",
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
      fiziksel_İd: "200",
      gorevliAdi: "ISIM SOYISIM",
      urunismi: "Gıda",
      kategori: "Beslenme",
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
      fiziksel_İd: "300",
      gorevliAdi: "ISIM SOYISIM",
      urunismi: "Giysi",
      kategori: "Giysi",
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
    const { fiziksel_İd, adetSayisi, istenilenBolge } = req.body;

    let urunismi;
    if (fiziksel_İd === "401") {
      urunismi = "İlk Yardım Kiti";
    } else if (fiziksel_İd === "402") {
      urunismi = "Tansiyon İlacı";
    } else {
      return res.status(400).send({ error: "Geçersiz fiziksel id" });
    }

    const sabitDegerler = {
      gorevliAdi: "ISIM SOYISIM",
      kategori: "Tıbbi Malzeme",
    };

    const gorevliIstegi = new GorevliIstegiModeli({
      ...sabitDegerler,
      urunismi,
      fiziksel_İd,
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
