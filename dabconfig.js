const mongoose = require("mongoose");

function connectdb() {
    mongoose.connect("mongodb://localhost:27017/newuser")
    .then((response) => console.log("db connected"))
    .catch((err) => console.log(err))
}

module.exports= {connectdb}