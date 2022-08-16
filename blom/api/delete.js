const produk = require("../../models/produk");
const router = require('express').Router()

//delete by id
router.delete('/:postid', async(req, res)=>{
    try {
        const del = await produk.remove({_id : req.params.postid})
        res.json(del)
    } catch(err) {
        res.status(404).send(err)
    }
})

module.exports = router