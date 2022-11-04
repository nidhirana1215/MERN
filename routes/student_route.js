const express = require('express')
const router = express.Router()
const signupinfo = require('../models/student_models')

//Insert Data
router.post('/signup', async (req, res) => {
    const signupentry = new signupinfo({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        password: req.body.password,
    })
    signupentry.save()
})

//Display All Data

router.get('/dispStudent', async (req, res) => {
    const data = await signupinfo.find()
    res.json(data)
})

//get data
router.get('./getOneStudent/:id', async (req, res) => {
    try {
        const data = await signupinfo.findById(req.params.id)
        res.json(data)
    } catch (error) {
        res.json({ message: error.message })
    }
})

//Update your data
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id
        const updateData = req.body;
        const options = { new: true };
        const result = await signupinfo.findByIdAndUpdate(id, updateData, options)
        result.send(result)
    }
    catch (error) {
        res.json({ message: error.message })
    }
})

//Search Record 
router.get('/search/:key', async (req, res) => {
    let result = await signupinfo.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { phone: { $regex: req.params.key } },
        ]
    })
    res.send(result)
})


//Delete Data
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await signupinfo.findByIdAndDelete(id)
        res.send('Student {$data.name} has been deleted')
    }
    catch (error) {
        res.json({ message: error.message })
    }
})
module.exports = router