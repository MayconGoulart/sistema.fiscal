const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 076ddf3 ([ADD] Extras Mongoose)
// const ContatoModel = require("./models/Contato");
const PessoaJuridicaModel = require("./models/PessoaJuridica");
const PessoaFisicaModel = require("./models/PessoaFisica");
=======
const ContatoModel = require("./models/Contato"); 
>>>>>>> bd68925 ([ADD] Extras Mongoose)
<<<<<<< HEAD

=======
const ContatoModel = require("./models/Contato");
>>>>>>> a8d2c0f ([ADD Server Mongo])
=======
// const ContatoModel = require("./models/Contato");
const PessoaJuridicaModel = require("./models/PessoaJuridica");
const PessoaFisicaModel = require("./models/PessoaFisica");
>>>>>>> c5c0c5d (att models e conexão Banco.)
=======
>>>>>>> 076ddf3 ([ADD] Extras Mongoose)
=======
// const ContatoModel = require("./models/Contato");
const PessoaJuridicaModel = require("./models/PessoaJuridica");
const PessoaFisicaModel = require("./models/PessoaFisica");
>>>>>>> ed261c8 (conexão banco)

app.use(express.json());
app.use(cors());

mongoose.connect(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    "mongodb+srv://db_admin:senha1234@sistemafiscal.orybm.mongodb.net/fiscal?retryWrites=true&w=majority", 
=======
    "mongodb+srv://db_user:STolYpHa8G8UZfBs@sistemafiscal.btu8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
>>>>>>> bd68925 ([ADD] Extras Mongoose)
=======
    "mongodb+srv://db_user:STolYpHa8G8UZfBs@cluster0.btu8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
>>>>>>> a8d2c0f ([ADD Server Mongo])
=======
    "mongodb+srv://db_admin:senha1234@sistemafiscal.orybm.mongodb.net/fiscal?retryWrites=true&w=majority", 
>>>>>>> c5c0c5d (att models e conexão Banco.)
=======
    "mongodb+srv://db_admin:senha1234@sistemafiscal.orybm.mongodb.net/fiscal?retryWrites=true&w=majority", 
=======
    "mongodb+srv://db_user:STolYpHa8G8UZfBs@sistemafiscal.btu8p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
>>>>>>> bd68925 ([ADD] Extras Mongoose)
>>>>>>> 076ddf3 ([ADD] Extras Mongoose)
=======
    "mongodb+srv://db_admin:senha1234@sistemafiscal.orybm.mongodb.net/fiscal?retryWrites=true&w=majority", 
>>>>>>> ed261c8 (conexão banco)
    {
        useNewUrlParser: true,
    }
);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
app.post("/insertJuridica", async (req, res) => {       
=======
    "mongodb+srv://db_admin:senha1234@sistemafiscal.orybm.mongodb.net/fiscal?retryWrites=true&w=majority", {
        useNewUrlParser: true,
    }
);
app.post("/insertJuridica", async(req, res) => {
>>>>>>> 86cbf45 (Inserts de todos os dados completos)
    const nome = req.body.nome;
    const cnpj = req.body.cnpj;
    const nomelegal = req.body.nomelegal;
    const ie = req.body.ie;
    const telefone = req.body.telefone;
    const celular = req.body.celular;
    const email = req.body.email;
    const empresa = req.body.empresa;
    const website = req.body.website;
    const perfilFiscal = req.body.perfilFiscal;
    const tx = req.body.tx;

    //endereço
    const cep = req.body.cep;
    const rua = req.body.rua;
    const numero = req.body.numero;
    const complemento = req.body.complemento;
    const distrito = req.body.distrito;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const pais = req.body.pais;

    const pessoaJuridica = new PessoaJuridicaModel({
        Nome: nome,
        CNPJ: cnpj,
        NomeLegal: nomelegal,
        IE: ie,
        Telefone: telefone,
        Celular: celular,
        Email: email,
        Empresa: empresa,
        WebSite: website,
        PerfilFiscal: perfilFiscal,
        Tx: tx,

        //endereço
        CEP: cep,
        Rua: rua,
        Numero: numero,
        Complemento: complemento,
        Distrito: distrito,
        Cidade: cidade,
        Estado: estado,
        Pais: pais,

    });

    try {
        await pessoaJuridica.save();
        res.send("insert Data");
    } catch (err) {
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

app.post("/insertFisica", async(req, res) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const rg = req.body.cpf;
    const cargo = req.body.cargo;
    const telefone = req.body.telefone;
    const celular = req.body.celular;
    const email = req.body.email;
    const website = req.body.website;
    const perfilFiscal = req.body.perfilFiscal;

    //endereço
    const cep = req.body.cep;
    const rua = req.body.rua;
    const numero = req.body.numero;
    const complemento = req.body.complemento;
    const distrito = req.body.distrito;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const pais = req.body.pais;


    const pessoaFisica = new PessoaFisicaModel({
        Nome: nome,
        CPF: cpf,
        Rg: rg,
        Cargo: cargo,
        Telefone: telefone,
        Celular: celular,
        Email: email,
        WebSite: website,
        PerfilFiscal: perfilFiscal,
        //endereço
        CEP: cep,
        Rua: rua,
        Numero: numero,
        Complemento: complemento,
        Distrito: distrito,
        Cidade: cidade,
        Estado: estado,
        Pais: pais,
    });
    try {
        await pessoaFisica.save();
        res.send("insert Data");
    } catch (err) {
=======
app.post("/insert", async (req, res) => {
    const nome = req.body.Name

    const contato = new ContatoModel({Nome: nome});
=======
=======
>>>>>>> 076ddf3 ([ADD] Extras Mongoose)
=======
>>>>>>> ed261c8 (conexão banco)
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c5c0c5d (att models e conexão Banco.)
=======
=======
app.post("/insert", async (req, res) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;

    const contato = new ContatoModel({nome: nome, cpf: cpf});

    console.log(contato);
>>>>>>> bd68925 ([ADD] Extras Mongoose)
>>>>>>> 076ddf3 ([ADD] Extras Mongoose)
=======
>>>>>>> ed261c8 (conexão banco)

app.post("/insertFisica", async (req, res) => {       
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    
    const pessoaFisica = new PessoaFisicaModel({Nome: nome, CPF:cpf});    
    try{
        await pessoaFisica.save();
        res.send("insert Data");
    }catch(err){
>>>>>>> a8d2c0f ([ADD Server Mongo])
        console.log(err);
    }
});

<<<<<<< HEAD
app.listen(3001, () => {
=======
app.listen(3001, ()=> {
>>>>>>> a8d2c0f ([ADD Server Mongo])
    console.log("Server running on port 3001....");
});
