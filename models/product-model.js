const mongoose = require("mongoose");

const modelSchema = mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    discount:{
        type:Number,
        default:0
    },
    bgcolor:{
        type:String,
        require:true
    },
    panelcolor:String,
    textcolor:String
    
})

module.exports = mongoose.model("product",modelSchema)