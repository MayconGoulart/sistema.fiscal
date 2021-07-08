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
    "mongodb+srv://db_admin:senha1234@sistemafiscal.orybm.mongodb.net/fiscal?retryWrites=true&w=majority", {
        useNewUrlParser: true,
    }
)
app.post("/insertJuridica", async(req, res) => {
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
})

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
        console.log(err);
    }
});

app.listen(3001, () => {
    console.log("Server running on port 3001....");
});