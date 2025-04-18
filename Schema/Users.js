const mongoose = require('mongoose')

const Users =mongoose.Schema({
    Name :{
        type:String,
        required :true,
    },

    UserName :{
        type:String,
        required :true,
    },
    Email :{
        type:String,
        required :true,
        unique:true,
    },
    Password :{
        type:String,
        required :true,
        unique:true,
    },
    Contact :{
        type:Number,
        required :true,
        unique:true,
    }
})

module.exports = mongoose.model('registersdata' , Users)
