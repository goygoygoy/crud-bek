const mongoose=require('mongoose');

const UserSchema = mongoose.Schema({
    nama: {
        type : String,
        required: true,
        min : 6,
        max : 255
    },
    email: {
        type : String,
        required: true,
        min : 6,
        max : 255
    },
    password: {
        type : String,
        required: true,
        min : 6,
        max : 50
    },
    tglDaftar:{
        type : Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model('User',UserSchema)