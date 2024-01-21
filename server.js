var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");


var app = Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://jaickey09:DId8kwm446DPSlDn@cluster0.cppzauq.mongodb.net/?retryWrites=true&w=majority"; 

var DATABASENAME = "CSD";
var database;

app.listen(5000,()=>{
    MongoClient.connect(CONNECTION_STRING,(error,client)=>{
        database = client.db(DATABASENAME);
        console.log("MONGO DB CONNECTED");
    })
})