// npm init
// npm install nodemon
// npm install express
// npm install mongoose
// username: Rajnish_2003
// Password: 9525cFPWxsv5U2S

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/store-routes");
const cors=require('cors');
const app = express();


//Middlewares
app.use(express.json());
app.use(cors());
app.use("/stores", router);  //localhost:5000/stores

mongoose.connect(
    "mongodb+srv://Rajnish_2003:9525cFPWxsv5U2S@cluster0.sshofgq.mongodb.net/STORE_MANAGEMANT?retryWrites=true&w=majority"
).then(() => console.log("Connected to database"))
    .then(() => {
        app.listen(5000);
    })
    .catch((err) => console.log((err)));




