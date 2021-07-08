const mongoose = require("mongoose");
const PessoaFisicaSchema = new mongoose.Schema({
    Nome: {

        type: String,
        required: true,
    },

    CPF: {
        required: true,
        type: String,
    },
    Rg: {
        type: String,
        required: true,
    },
    Cargo: {
        type: String,
        required: true,
    },
    Telefone: {
        type: String,
        required: true,
    },
    Celular: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    WebSite: {
        type: String,
        required: true,
    },
    PerfilFiscal: {
        type: String,
        required: true,
    },
    CEP: {
        type: String,
    },
    Rua: {
        type: String,
    },
    Numero: {
        type: String,
    },
    Complemento: {
        type: String,
    },
    Distrito: {
        type: String,
    },
    Cidade: {
        type: String,
    },
    Estado: {
        type: String,
    },
    País: {
        type: String,
    },


});


const pessoaFisica = mongoose.model("pFisica", PessoaFisicaSchema);
module.exports = pessoaFisica;