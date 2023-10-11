const express = require("express");
require("dotenv").config();
const { Connection } = require("./config/db");
const { messageRoute } = require("./routes/messageRoute")
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Basic API endpoint for Message recieving backend");
})

app.use("/",messageRoute);



app.listen(process.env.port, async () => {
    try {
        await Connection;
        console.log("Connected to DataBase");
        console.log(`server is running at http://localhost:${process.env.port}`);
    } catch (error) {
        console.log(error.message);
        console.log("Unable to connect to DataBase");
    }
})


