const express = require("express");
const User = require("../models/user");
const User2 = require("../models/user2");
const User3 = require("../models/user3");
const User4 = require("../models/user4");
const User5 = require("../models/user5");

//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------

const checkPostFrequency = require("../middleware/checkPostFrequency");
const router = new express.Router();

//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------

// ben tanidiğim enkaz altinda
router.post("/users/enkaz-altinda", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/users/enkaz-altinda", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------

// KONAKLAMA YARDIMI
router.post("/users/konaklama-yardimi", async (req, res) => {
  const user2 = new User2(req.body);

  try {
    await user2.save();
    res.status(201).send(user2);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/users/konaklama-yardimi", async (req, res) => {
  try {
    const users = await User2.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------

//GIYSI YARDIMI
router.post("/users/giysi-yardimi", async (req, res) => {
  const user3 = new User3(req.body);

  try {
    await user3.save();
    res.status(201).send(user3);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/users/giysi-yardimi", async (req, res) => {
  try {
    const users = await User3.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------

//GIDA YARDIMI
router.post("/users/gida-yardimi", async (req, res) => {
  const user5 = new User5(req.body);

  try {
    await user5.save();
    res.status(201).send(user5);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/users/gida-yardimi", async (req, res) => {
  try {
    const users = await User5.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------

//IS ARACI
router.post("/users/is-araci-kullanabilirim", async (req, res) => {
  const user4 = new User4(req.body);

  try {
    await user4.save();
    res.status(201).send(user4);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/users/is-araci-kullanabilirim", async (req, res) => {
  try {
    const users = await User4.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------

//FOR ALL USERS
router.get("/users/all", async (req, res) => {
  try {
    const users1 = await User.find();
    const users2 = await User2.find();
    const users3 = await User3.find();
    const users4 = await User4.find();
    const users5 = await User5.find();

    // Burada istediğimiz gibi farklı modellerden gelen verileri birleştirebiliriz
    const allUsers = {
      users1,
      users2,
      users3,
      users4,
      users5,
    };

    res.send(allUsers);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

//-------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------

module.exports = router;
