const produk = require("../../models/produk");
const router = require('express').Router()

//post
router.post('/', async(req, res) => {

    //buat data
    const barang = new produk({
        nama: req.body.nama,
        jenis: req.body.jenis,
        expired: req.body.expired
    })
    const nama = await produk.findOne({
        nama: req.body.nama,
        jenis: req.body.jenis,
        expired: req.body.expired
    })
    //jika sudah terdaftar
    if (nama) return res.status(400).send('data sudah terdaftar')
    if(barang.jenis=='buah' && barang.expired==null) return res.status(200).send('data buah harus ada expired')
    else
    try{
        const br = await barang.save()
        res.json({barang})
    }catch(err){
        res.status(404).send(err)
    }
})

module.exports = router