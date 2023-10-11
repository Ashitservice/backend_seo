let express =require("express");
let messageRoute = express.Router();
const {saveMessage,getAllMessage} =require("../controllers/messageController")

messageRoute.post("/message",saveMessage);

messageRoute.get("/message",getAllMessage);

module.exports={
    messageRoute
}