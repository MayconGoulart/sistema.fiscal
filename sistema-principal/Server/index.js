const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const ContatoModel = require("./models/Contato");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://db_user:STolYpHa8G8UZfBs@cluster0.btu8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
    }
);

app.post("/insert", async (req, res) => {
    const nome = req.body.Name

    const contato = new ContatoModel({Nome: nome});

    try{
        await contato.save();
        res.send("Dado inserido");
    }catch(err){
        console.log(err);
    }
});

app.listen(3001, ()=> {
    console.log("Server running on port 3001....");
});