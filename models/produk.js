const mongoose = require('mongoose')

const BarangSchema = mongoose.Schema({
    nama : {
        type: 'String',
        required: true
    },
    jenis : {
        type: 'String',
        required: true
    },
    expired : {
        type: 'String',
    },
    tgldftr : {
        type: 'Date',
        default: Date.now()
    }
})

module.exports = mongoose.model('Product',BarangSchema)
