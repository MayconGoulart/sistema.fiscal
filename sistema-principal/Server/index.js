const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

<<<<<<< HEAD
// const ContatoModel = require("./models/Contato");
const PessoaJuridicaModel = require("./models/PessoaJuridica");
const PessoaFisicaModel = require("./models/PessoaFisica");
=======
const ContatoModel = require("./models/Contato"); 
>>>>>>> bd68925 ([ADD] Extras Mongoose)

app.use(express.json());
app.use(cors());

mongoose.connect(
<<<<<<< HEAD
    "mongodb+srv://db_admin:senha1234@sistemafiscal.orybm.mongodb.net/fiscal?retryWrites=true&w=majority", 
=======
    "mongodb+srv://db_user:STolYpHa8G8UZfBs@sistemafiscal.btu8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
>>>>>>> bd68925 ([ADD] Extras Mongoose)
    {
        useNewUrlParser: true,
    }
);

<<<<<<< HEAD
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
=======
app.post("/insert", async (req, res) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;

    const contato = new ContatoModel({nome: nome, cpf: cpf});

    console.log(contato);
>>>>>>> bd68925 ([ADD] Extras Mongoose)

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
