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
        required: false,
    },
    Empresa: {
        type: String,
        required: false,
    },
    Telefone: {
        type: String,
        required: false,
    },
    Celular: {
        type: String,
        required: false,
    },
    Email: {
        type: String,
        required: false,
    },
    WebSite: {
        type: String,
        required: false,
    },
    PerfilFiscal: {
        type: String,
        required: true,
    },
    CEP: {
        type: String,
        required: true,
    },
    Rua: {
        type: String,
        required: true,
    },
    Numero: {
        type: String,
        required: true,
    },
    Complemento: {
        type: String,
        required: false,
    },
    Distrito: {
        type: String,
        required: true,
    },
    Cidade: {
        type: String,
        required: true,
    },
    Estado: {
        type: String,
        required: true,
    },
    País: {
        type: String,
        required: true,
    },


});


const pessoaFisica = mongoose.model("pFisica", PessoaFisicaSchema);
module.exports = pessoaFisica;