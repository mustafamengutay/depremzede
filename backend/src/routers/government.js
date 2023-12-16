const express = require("express");
const Officer = require("../models/officer");
const Envanter = require("../models/envanter");
const router = new express.Router();

// görevli oluşrur
router.post("/gorevli-olustur", async (req, res) => {
  const officer = new Officer(req.body);
  //console.log(req.body);
  officer.password = officer.name + officer.surname;
  console.log(officer.password);

  try {
    await officer.save();
    const token = await officer.generateAuthToken();
    res.status(201).send({ officer, token });
  } catch (e) {
    res.status(400).send(e);
  }
});
// gorevli listesi
router.get("/gorevliler", async (req, res) => {
  try {
    const { authorized, search, Uid } = req.query;

    const filterOptions = {};

    if (authorized !== undefined) {
      filterOptions.authorized = authorized === "true";
    }

    if (search) {
      // Used regex for case-insensitive search on 'name' field
      filterOptions.name = new RegExp(search, "i");
    }

    if (Uid) {
      // Filter officers based on Uid
      filterOptions.Uid = parseInt(Uid);
    }

    // Fetch officers with filtering
    const officers = await Officer.find(filterOptions);

    res.send(officers);
  } catch (e) {
    res.status(500).send();
  }
});
//şimdilik gerek yok id ye göre arar
router.get("/government/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const officer = await Officer.findById(_id);

    if (!officer) {
      return res.status(404).send();
    }

    res.send(officer);
  } catch (e) {
    res.status(500).send();
  }
});
// id ye göre bilgileri günceller
router.patch("/gorevliler/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "name",
    "surname",
    "phoneNumber",
    "email",
    "authorized",
  ];
  const isValidOperation = updates.every((update) => {
    return allowedUpdates.includes(update);
  });

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const officer = await Officer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!officer) {
      return res.status(404).send();
    }

    res.send(officer);
  } catch (e) {
    res.status(400).send(e);
  }
});
// görevli silme id ile
router.delete("/gorevli-sil/:id", async (req, res) => {
  try {
    const officer = await Officer.findByIdAndDelete(req.params.id);

    if (!officer) {
      res.status(404).send();
    }

    res.send(officer);
  } catch (e) {
    res.status(500).send();
  }
});

/* This is the part for inventory*/

router.post("/inventory", async (req, res) => {
  try {
    const { urunIsmi, kategori, adeti } = req.body;

    // Create a new inventory item
    const newInventoryItem = new Envanter({
      urunIsmi,
      kategori,
      adeti,
    });

    // Save the item to the inventory
    await newInventoryItem.save();

    res.status(201).send(newInventoryItem);
  } catch (e) {
    res.status(400).send(e);
  }
});

// Retrieve all items from the inventory

router.get("/inventory", async (req, res) => {
  try {
    console.log("Try block is executed.");
    const envanterItems = await Envanter.find({});
    res.send(envanterItems);
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .send({ error: "Internal Server Error", details: e.message }); // Hata mesajını yanıta ekleyin
  }
});

router.delete("/inventory/:id", async (req, res) => {
  const inventoryItemId = req.params.id;

  try {
    // Find the inventory item by ID and remove it
    const removedItem = await Envanter.findByIdAndDelete(inventoryItemId);

    if (!removedItem) {
      return res.status(404).send({ error: "Item not found" });
    }

    res.send(removedItem);
  } catch (e) {
    res.status(500).send(e);
  }
});

// Güncelleme işlemi için bir route eklenme çıkarma durumu için
router.patch("/inventory/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["urunIsmi", "kategori", "adeti"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const inventoryItem = await Envanter.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!inventoryItem) {
      return res.status(404).send();
    }

    res.send(inventoryItem);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;

/*
görevli istek yaptığı zaman yöneticinin istek listesine düşcek
*/
