const express = require("express");
require("dotenv").config();
const bodyparser = require("body-parser");
const cors = require("cors");

APP_SERVER = express();

const {connectdb} = require("./dabconfig")

connectdb();

APP_SERVER.use(cors());

APP_SERVER.use(bodyparser.json())


const PORT = process.env.PORT;

APP_SERVER.listen(PORT,() => {
    console.log(`server Listening ${PORT}`)
})

APP_SERVER.use("/api",require("./controllers/Authcontrollers"));

APP_SERVER.all("/",(req,res,next) => {
    return res.status(200).json({
        message: "Server Working"
    })
})