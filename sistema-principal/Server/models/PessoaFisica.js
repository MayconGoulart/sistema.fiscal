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
        /*RG: {
            type: String,
        },
        Cargo: {
            type: String,
        },
        Telefone: {
            type: String,
        },
        Celular: {
            type: String,
        },
        Email: {
            type: String,
        },
        Website: {
            type: String,
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
        PerfilFiscal: {
            type: String,
        }, */    
});

const pessoaFisica = mongoose.model("pFisica", PessoaFisicaSchema);
module.exports = pessoaFisica;
