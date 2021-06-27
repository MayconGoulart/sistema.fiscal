const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// const ContatoModel = require("./models/Contato");
const PessoaJuridicaModel = require("./models/PessoaJuridica");
const PessoaFisicaModel = require("./models/PessoaFisica");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://db_admin:senha1234@sistemafiscal.orybm.mongodb.net/fiscal?retryWrites=true&w=majority", 
    {
        useNewUrlParser: true,
    }
);

app.post("/insertJuridica", async (req, res) => {       
    const nome = req.body.nome;
    const cnpj = req.body.cnpj;
    const pessoaJuridica = new PessoaJuridicaModel({nome: nome, CNPJ: cnpj});
    console.log("teste");
    try{
        await pessoaJuridica.save();
        res.send("insert Data");
    }catch(err){
        console.log(err);
    }
});

app.post("/insertFisica", async (req, res) => {       
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    
    const pessoaFisica = new PessoaFisicaModel({Nome: nome, CPF:cpf});    
    try{
        await pessoaFisica.save();
        res.send("insert Data");
    }catch(err){
        console.log(err);
    }
});

app.listen(3001, ()=> {
    console.log("Server running on port 3001....");
});
