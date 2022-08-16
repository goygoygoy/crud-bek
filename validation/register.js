const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const valid = require('./validationuser')

//post
router.post('/register', async(req, res) => {
    //validasi sebelum menjadi pengguna
    const {error} = valid.register({
        nama : req.body.nama,
        email : req.body.email,
        password : req.body.password})
    if (error) return res.status(200).send(error.details[0].message)
    
    //cek email
    const emailexist = await User.findOne({email: req.body.email})
    if (emailexist) return res.status(400).send('email sudah terpakai')

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(req.body.password, salt)

    //buat user
    const user = new User({
        nama: req.body.nama,
        email: req.body.email,
        password: hashpassword
    })
    try{
        const pp = await user.save()
        res.json({user : user._id})
    } catch(err){
        res.status(404).send(err)
    }
})

module.exports = router