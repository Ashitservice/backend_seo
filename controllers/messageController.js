const{Messagemodel}=require("../models/message.model");
const moment=require("moment-timezone");
moment.tz.setDefault("Asia/Kolkata");

const saveMessage =async(req,res)=>{
    const{name,email,countryCode,number,reason,message,from}=req.body; 
    try {
        if(req.body){
            const Message=new Messagemodel({name,email,countryCode,number,reason,message,time:moment().format('LLLL'),from});
            await Message.save();
            res.status(201).json({"msg":"Thank you for reaching out to us."});
        }else{
            res.status(400).json({"msg":"Unable to reach"});
        }
    } catch (error) {
        console.log(error.message);
        res.status(400).json({"msg":"Unable to reach"});
    }
}

const getAllMessage =async(req,res)=>{
    try {
        const messages=await Messagemodel.find();
        res.status(200).json({"msg":"messages fetched successfully","data":messages});
    } catch (error) {
        console.log(error.message);
        res.status(400).json({"msg":"Unable to fetch the messages."});
    }
}

module.exports={
    saveMessage,
    getAllMessage
}