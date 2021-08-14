const mongoose = require("mongoose");
const PessoaJuridicaSchema = new mongoose.Schema({
    Nome: {
        type: String,
        required: true,
    },
    CNPJ: {
        type: String,
        required: true,
    },
    NomeLegal: {
        type: String,
        required: true,
    },
    IE: {
        type: String,
        required: true,
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
    Pais: {
        type: String,
        required: true,
    },
    PerfilFiscal: {
        type: String,
        required: true,
    },
    Tx: {
        type: String,
        required: true,
    },

});

const PessoaJuridica = mongoose.model("pJuridica", PessoaJuridicaSchema);
module.exports = PessoaJuridica;