const mongoose = require("mongoose");
const PessoaJuridicaSchema = new mongoose.Schema({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> db9418f (Inserts de todos os dados completos)
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

<<<<<<< HEAD
=======
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
        
          
>>>>>>> c5c0c5d (att models e conexão Banco.)
=======
>>>>>>> db9418f (Inserts de todos os dados completos)
});

const PessoaJuridica = mongoose.model("pJuridica", PessoaJuridicaSchema);
module.exports = PessoaJuridica;