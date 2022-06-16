
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const random = require("randomstring");
const Post = require("./schema");
var md5 = require("md5");

const string = random.generate(4).toUpperCase();

app.use(cors());
app.use(express.json());


app.post("/", async (req,res)=>{
    try{
        const str = md5(req.body.code);
        const hash = req.body.hash;
        if(hash===str){
            const data = await Post.create({
                text: req.body.text,
                code: str
            })
           return res.status(201).json(data);
        }
        return res.status(400).json({message: "Code are not matched"});
    }
    catch(err){
        return res.status(500).json({error: err});
    }
})
app.get("/", async (req,res)=>{
    try{
        const data = await Post.find({});
        if(!data) return res.status(400).json({message: "No data present"});
        return res.status(201).json(data);
    }
    catch(err){
        return res.status(500).json({error: err});
    }
})

app.get("/code",async(req,res)=>{
    try{
        res.send({code: string, hash: md5(string)});
    }
    catch(err){
        return res.status(500).json({error: err});
    }
})

const connect = function (){
    return mongoose.connect("mongodb://localhost:27017/voltapanda");
}

const start = async()=>{
    await connect();
    app.listen(5000,()=>{
        console.log("App is listening on port 5000");
    })
}

start();