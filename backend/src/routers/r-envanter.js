const express = require("express");
const Envanter = require("../models/m-envanter");
const router = new express.Router();

//------------------------------------------------------------------------------

// TUM ENVANTERI LISTELE (GET)
router.get("/envanter-listele", async (req, res) => {
  try {
    const envanterListesi = await Envanter.find({});
    res.status(200).send(envanterListesi);
  } catch (error) {
    res.status(500).send(error);
  }
});

//------------------------------------------------------------------------------

// TUM ENVANTERI TEMIZLE (DELETE)
router.delete("/envanter-tumunu-sil", async (req, res) => {
  try {
    await Envanter.deleteMany({});

    res.send({ message: "Tüm Envanter başarıyla silindi." });
  } catch (error) {
    res.status(500).send(error);
  }
});

//------------------------------------------------------------------------------

// ENVANTERE EKLEME YAP (POST)
router.post("/envanter-ekle", async (req, res) => {
  const { fiziksel_id, adetSayisi } = req.body;

  try {
    // Önceden var olan kaydı bul
    let envanterItem = await Envanter.findOne({ fiziksel_İd: fiziksel_id });

    // fiziksel_id'ye göre urunismi ve kategori ataması
    const urunVeKategori = {
      100: { urunismi: "Çadır", kategori: "Barınma" },
      200: { urunismi: "Gıda", kategori: "Beslenme" },
      300: { urunismi: "Kıyafet", kategori: "Giysi" },
      401: { urunismi: "İlk-Yardim-Kiti", kategori: "Tıbbi Malzeme" },
      402: { urunismi: "Tansiyon-ilacı", kategori: "Tıbbi Malzeme" },
    };

    // Eğer kayıt zaten varsa adetSayisi'ni güncelle
    if (envanterItem) {
      envanterItem.adetSayisi =
        parseInt(envanterItem.adetSayisi) + parseInt(adetSayisi);
      await envanterItem.save();
    } else {
      // Yeni kayıt oluştur
      envanterItem = new Envanter({
        fiziksel_İd: fiziksel_id,
        ...urunVeKategori[fiziksel_id],
        adetSayisi: adetSayisi,
      });
      await envanterItem.save();
    }

    res.status(201).send(envanterItem);
  } catch (error) {
    res.status(400).send(error);
  }
});

//------------------------------------------------------------------------------
const GorevliIstegiModeli = require("../models/m-gorevli-istegi");

// ENVANTERDEN İTEM ONAYLA (POST)
router.post("/envanter-onayla", async (req, res) => {
  const { fiziksel_id, adetSayisi } = req.body;

  try {
    // Envanterdeki ilgili ürünü bul
    let envanterItem = await Envanter.findOne({ fiziksel_İd: fiziksel_id });

    if (!envanterItem) {
      return res.status(404).send({ message: "Ürün bulunamadı." });
    }

    // Envanterdeki adet sayısını azalt
    envanterItem.adetSayisi =
      parseInt(envanterItem.adetSayisi) - parseInt(adetSayisi);

    // Eğer adetSayisi 0 veya daha az ise, ürünü sil
    if (envanterItem.adetSayisi <= 0) {
      await Envanter.deleteOne({ fiziksel_İd: fiziksel_id });
    } else {
      // Güncellenen adetSayisi ile kaydet
      await envanterItem.save();
    }

    // Gorevli İstegi'nden ilgili kaydı sil
    await GorevliIstegiModeli.deleteOne({ fiziksel_İd: fiziksel_id });

    res.send({ message: "İşlem başarıyla tamamlandı." });
  } catch (error) {
    res.status(500).send(error);
  }
});

//------------------------------------------------------------------------------

module.exports = router;
