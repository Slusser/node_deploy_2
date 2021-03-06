const express = require("express");
const path = require("path");
const jst = require("./functions");
const server = express();
const port = process.env.PORT || 3000;

server.set("view engine","hbs")
server.use("/assets",express.static(path.join(__dirname,"./assets")))
server.use("/js",express.static(path.join(__dirname,"./js")))

server.get("/",function (req,res){
    res.render("index",{
        pageTite: "lekcja NODE",
        teststringa: jst.stringTest
    })
})

server.get("/tech",function (req,res){
    res.send("techonology")
})

server.get("/about",function (req,res){
    res.send("o nas")
})

server.listen(port, (err)=>{if(err){return console.log(`Blad: ${err}`)}});