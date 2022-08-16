const produk = require("../../models/produk");
const router = require('express').Router()

//get
router.get('/',paginated(get),async(req, res)=>{
    const get = await produk.find()
    res.json(res.paginatedresult)
})

function paginated(model){
    return (req, res, next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)
        const SI=(page-1) * limit
        const EI=page*limit
        const result={}
        if(EI<model.length){
            result.next = {
            page : page + 1,
            limit : limit
            }
        }
        if(SI > 0){
            result.previous = {
            page : page - 1,
            limit : limit
            }
        }
        result.result = model.slice(SI,EI)
        res.paginatedresult = result
        next()
    }
}
//spesific view
// router.get('/:postid', async(req, res)=>{
//     try {
//         const get = await produk.findById(req.params.postid)
//         res.json(get)
//     } catch(err) {
//         res.status(404).send(err)
//     }
// })

module.exports = router