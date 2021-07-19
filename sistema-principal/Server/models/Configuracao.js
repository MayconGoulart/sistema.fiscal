const mongoose = require("mongoose");
const ConfiguracaoSchema = new mongoose.Schema({
    NomeCompanhia: {
        type: String,
        required: true,
    },
    NomeLegal: {
        required: true,
        type: String,
    },
    CNPJ: {
        type: String,
        required: true,
    },
    InscricaoEstadual: {
        type: String,
        required: false,
    },
    InscricaoMunicipal: {
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
        required: false,
    },
    QuadroFiscal: {
        type: String,
        required: true,
    },
    CalculoLucro: {
        type: String,
        required: true,
    },
    RendaAnual: {
        type: String,
        required: false,
    },
    FaixaImpostoSimplificado: {
        type: String,
        required: false,
    },
    PorcentagemImpostoSimplificado: {
        type: String,
        required: false,
    },
    PisCofins: {
        type: String,
        required: true,
    },
    IPI: {
        type: String,
        required: true,
    },
    ICMS: {
        type: String,
        required: false,
    },
    ISSQN: {
        type: String,
        required: false,
    },
    CSLL: {
        type: String,
        required: true,
    },
    IRPJ: {
        type: String,
        required: true,
    },
    INSS: {
        type: String,
        required: false,
    },

});


const Configuracao = mongoose.model("configuracao", ConfiguracaoSchema);
module.exports = Configuracao;