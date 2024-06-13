const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cart:{
        type:Array,
        default:[],
        require:true
    },
    order:{
        type:Array,
        default:[],
        require:true
    },
    contact:Number,
    picture:String
    
})

module.exports = mongoose.model("user",userSchema)