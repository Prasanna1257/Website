//creating schema

const mongoose= require("mongoose");

const dataSchema= new mongoose.Schema({
    //Name, Address, phonenumber, any delivery instructions, product, quantity

    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required: true
    },
    phoneNumber:{
        type:Number,
        required: true
    },
    deliveryInstructions:{
        type:String,
    },
    product:{
        type:String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    orderDateTime:{
        type: Date,
        default: Date.now
    }
})

module.exports= mongoose.model("Detail", dataSchema)