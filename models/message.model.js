const mongoose=require("mongoose");

const messageSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    countryCode:{type:String,required:true},
    number:{type:String,required:true},
    message:{type:String,required:true},
    from:{type:String,required:true},
    medium:{type:String,required:true},
    time:{type:String,required:true}
})

const Messagemodel=mongoose.model("message",messageSchema);

module.exports={
    Messagemodel
}