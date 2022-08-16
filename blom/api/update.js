const produk = require("../../models/produk");
const router = require('express').Router()

//update by id
router.patch('/:postid', async(req, res)=> {
    try{
        const update = await produk.updateOne(
            {_id : req.params.postid},
            {$set: {nama : req.body.nama}}
        )
        res.json(update)
    } catch(err) {
        res.status(404).send(err)
    }
})


module.exports = router