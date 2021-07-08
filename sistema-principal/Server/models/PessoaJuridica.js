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
    Empresa: {
        type: String,
        required: true,
    },
    WebSite: {
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
        defaut: null,
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
    PerfilFiscal: {
        type: String,
    },
    Tx: {
        type: String,
    },

});

const PessoaJuridica = mongoose.model("pJuridica", PessoaJuridicaSchema);
module.exports = PessoaJuridica;