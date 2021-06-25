const mongoose = require("mongoose");
<<<<<<< HEAD:sistema-principal/Server/models/PessoaFisica.js
const PessoaFisicaSchema = new mongoose.Schema({
        Nome: {
=======

const ContatoSchema = new mongoose.Schema({
        nome: {
>>>>>>> bd68925 ([ADD] Extras Mongoose):sistema-principal/Server/models/Contato.js
            type: String,
            required: true,
        },
<<<<<<< HEAD:sistema-principal/Server/models/PessoaFisica.js
        CPF: {
=======
        cpf: {
>>>>>>> bd68925 ([ADD] Extras Mongoose):sistema-principal/Server/models/Contato.js
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

<<<<<<< HEAD:sistema-principal/Server/models/PessoaFisica.js
const pessoaFisica = mongoose.model("pFisica", PessoaFisicaSchema);
module.exports = pessoaFisica;
=======
const ContatoModel = mongoose.model("Contato", ContatoSchema);
module.exports = ContatoModel;
>>>>>>> bd68925 ([ADD] Extras Mongoose):sistema-principal/Server/models/Contato.js
