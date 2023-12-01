const mongoose=require("mongoose");

const messageSchema=mongoose.Schema({
    name:String,
    email:String,
    number:String,
    reason:String,
    message:String,
    from:String,
    time:String
})

const Messagemodel=mongoose.model("message",messageSchema);

module.exports={
    Messagemodel
}