const mongoose = require("mongoose");

const ContatoSchema = new mongoose.Schema({
        Nome: {
            type: String,
        },
        /*CPF: {
            type: String,
            required: true,
        },
        RG: {
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

const Contato = mongoose.model("Contato", ContatoSchema);
module.exports = Contato;