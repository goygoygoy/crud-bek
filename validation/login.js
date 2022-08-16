const router = require('express').Router()
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const valid = require('./validationuser')

//login
router.post('/login', async(req, res) => {
    //validasi login
    const { error } = valid.login({
        email : req.body.email,
        password : req.body.password})
    if (error) return res.status(200).send(error.details[0].message)
    
    //cek email jika ada
    const user = await User.findOne({email: req.body.email})
    if (!user) return res.status(400).send('email salah')
    //cek password
    const validpass = await bcrypt.compare(req.body.password, user.password)
    if(!validpass) return res.status(400).send('password salah')

    const token = jwt.sign({_id: user._id}, process.env.TS)
    res.header('auth-token',token).send(token)
})
module.exports = router