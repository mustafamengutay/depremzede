const express = require('express')
const User = require('../models/user')
const User2 = require('../models/user2')
const User3 = require('../models/user3')
const User4 = require('../models/user4')
const checkPostFrequency = require('../middleware/checkPostFrequency')
const router = new express.Router()

// ben tanidiğim enkaz altinda
router.post('/users/enkaz-altinda', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

// konaklama saglayabilirim
router.post('/users/konaklama-yardimi', async (req, res) => {
    const user2 = new User2(req.body)

    try {
        await user2.save()
        res.status(201).send(user2)
    } catch (e) {
        res.status(400).send(e)
    }
})

//giysi-yardimi
router.post('/users/giysi-yardimi', async (req, res) => {
    const user3 = new User3(req.body)

    try {
        await user3.save()
        res.status(201).send(user3)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/is-araci-kullanabilirim', async (req, res) => {
    const user4 = new User4(req.body)

    try {
        await user4.save()
        res.status(201).send(user4)
    } catch (e) {
        res.status(400).send(e)
    }
})


/*
eğer sınırlama getireceksek kullanılabilir ama mantıksız çünkü bir aile düşün o ailede 4 kişi var ve o adam 4 istek atmaz zorunda kalacak o yüzden sınırlama mantıksız.
router.post('/users', checkPostFrequency, async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});
*/

router.get('/users/enkaz-altinda', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})
router.get('/users/konaklama-yardimi', async (req, res) => {
    try {
        const users = await User2.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})
router.get('/users/giysi-yardimi', async (req, res) => {
    try {
        const users = await User3.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})
router.get('/users/is-araci-kullanabilirim', async (req, res) => {
    try {
        const users = await User4.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})
// for all users to get all of them
router.get('/users/all', async (req, res) => {
    try {
        const users1 = await User.find();
        const users2 = await User2.find();
        const users3 = await User3.find();
        const users4 = await User4.find();

        // Burada istediğimiz gibi farklı modellerden gelen verileri birleştirebiliriz
        const allUsers = {
            users1,
            users2,
            users3,
            users4,
        };

        res.send(allUsers);
    } catch (e) {
        res.status(500).send(e);
    }
});



router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router




/*
router.get('/users/enkaz-altinda', async (req, res) => {
    try {
        // Sadece belirli alanları seçerek tüm kullanıcıları getir
        const users = await User.find({}, 'name address email phoneNumber ilanDurumu');

        res.send(users);
    } catch (e) {
        res.status(500).send(e);
    }
});


//maybe we will need to take specific user_id
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

//maybe we will need to update specific user_id but idts

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'surname','phoneNumber', 'email', 'address', 'vehicleType', 'description']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

*/