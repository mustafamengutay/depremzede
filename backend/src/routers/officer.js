const express = require('express')
const Officer = require('../models/officer')
const User = require('../models/user')
//const User1 = require('../models/user1')
const auth = require('../middleware/auth')
const router = new express.Router()


router.post('/officers/login', async (req, res) => {
    
    try {
        const officer = await Officer.findByCredentials(req.body.email, req.body.password)
        const token = await officer.generateAuthToken()
        res.send({officer: officer.getPublicProfile() ,token})
        //normally res.send({officer ,token}) 
        //with getpublic profile we don't expose all of our information in the login
    } catch (e) {
        return res.status(400).send({ error: 'Für Elise' })
    }

})

router.post('/officers/logout', auth, async (req, res) => {

    try {
        req.officer.tokens = req.officer.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.officer.save()

        res.send()
    } catch (e) {
        res.status(500).send()
    }
})
// maybe we don't need it
router.post('/officers/logoutAll', auth, async (req, res) => {
    
    try {
        // if I delete first created token all of them will be deleted
        req.officer.tokens = []
        await req.officer.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
    
})

router.get('/officers/me' ,auth ,async (req, res) => {
    res.send(req.officer)
})

router.patch('/officers/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'surname', 'phoneNumber', 'email', 'authorized'];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const officer = await Officer.findById(req.params.id)
        updates.forEach((updates) => {
            officer[updates] = req.body[updates]
        })

        await officer.save()
        
        //const officer = await Officer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!officer) {
            return res.status(404).send()
        }

        res.send(officer)
    } catch (e) {
        res.status(400).send(e)
    }
})


/*-----------------------------------------JUST DO IT------------------------------------------------*/
/*----------------------------------------NEVER GIVE UP-----------------------------------------------*/
//bu officerlar için olan listeye düşer
router.get("/users/enkaz-altinda", async (req, res) => {
    try {
      const users = await User.find({status: false});
      res.send(users);
    } catch (e) {
      res.status(500).send();
    }
  });

// officerRouter.js

router.patch('/officers/depremzede-onayla/:id', async (req, res) => {
  try {
    // Kullanıcıyı id'ye göre bul ve onayla
    const user = await User.findByIdAndUpdate(req.params.id, { status: true }, { new: true });

    if (!user) {
      return res.status(404).json({ error: "Kullanici bulunamadı." });
    }

    res.send(user);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// new endpoint Officer router
router.patch('/users/enkaz-altinda/derece/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['derece']; // Add other fields as needed

  // Validate the updates
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

      if (!user) {
          return res.status(404).json({ error: 'User not found.' });
      }

      res.send(user);
  } catch (e) {
      res.status(400).send(e.message);
  }
});



//iptal butonu için
router.delete('/officers/cancel-request/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ error: "Kullanıcı bulunamadı." });
    }

    res.json({ user, message: "Başvuru iptal edildi." });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;








/*
// Approve a request from the enkaz-altinda list
router.patch('/officers/depremzede-onayla/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { status: true }, { new: true });
    
    const user1 = await User1.findByIdAndUpdate(req.params.id, { status: true }, { new: true });

    
    //if (!user) {
    //  return res.status(404).send();
    //}
    //res.send(user);
    

    if (!user || !user1) {
      return res.status(404).send();
  }
    // Başarılı durumda her iki kullanıcıyı da gönder
    res.json({
        user: user,
        user1: user1
    });

  } catch (e) {
    res.status(400).send(e);
  }
});


  // Cancel a request
  // I wrote it just in case to cancel request you have to delete it, go to one router below
  router.patch('/officers/cancel-request/:id', async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, { status: false }, { new: true });
  
      if (!user) {
        return res.status(404).send();
      }
  
      res.send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  });

*/








/*
router.post('/officers', async (req, res) => {
    const officer = new Officer(req.body)
    //console.log(req.body);
    //console.log(typeof(officer));
    try {
        await officer.save()
        res.status(201).send(officer)
    } catch (e) {
        res.status(400).send(e)
    }
})
*/
