const router = require('express').Router()
const verify = require('./verify')

router.get('/',verify, (req,res) => {
    res.json({
        posts:{
            judul: 'titanic',
            deskripsi : 'data acak'
        }
    })
})
module.exports = router