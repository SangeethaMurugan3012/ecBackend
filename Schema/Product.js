const mongoose = require('mongoose')

const CardData =mongoose.Schema({
    title :{
        type:String,
        required :true,
    },
    

    price :{
        type:String,
        required :true,
    },
    image :{
        type:String,
        required :true,
        
    },
    alt :{
        type:String,
        required :true,
        
    }
})

module.exports = mongoose.model('datas' , CardData)
