const mongoose = require("mongoose");
const PessoaJuridicaSchema = new mongoose.Schema({
        nome: {
            type: String,
            required:true,
        },
        CNPJ: {
            type: String,
            required:true,
        },
        // nomeLegal: {
        //     type: String,
        //     required:true,
        // },
        // IE: {
        //     type: String,
        //     required:true,
        // },
        // tel: {
        //     type: String,
        //     required:true,
        // },
        // cel: {
        //     type: String,
        //     required:true,
        // },
        // email: {
        //     type: String,
        //     required:true,
        // },
        // empresa: {
        //     type: String,
        //     required:true,
        // },
        // endereco: {
        //     type: String,
        //     required:true,
        // },
        
          
});

const PessoaJuridica = mongoose.model("pJuridica", PessoaJuridicaSchema);
module.exports = PessoaJuridica;