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
        required: false,
    },
    Complemento: {
        type: String,
        required: false,
    },
    Distrito: {
        type: String,
        required: false,
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
        required: false,
    },


});


const pessoaFisica = mongoose.model("pFisica", PessoaFisicaSchema);
module.exports = pessoaFisica;