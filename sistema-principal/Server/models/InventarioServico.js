const mongoose = require("mongoose");
const InventarioServicoSchema = new mongoose.Schema({
    Nome: {
        type: String,
        required: true,
    },
    PodeSerVendido: {
        type: Boolean,
        required: true,
    },
    PodeSerComprado: {
        type: Boolean,
        required: true,
    },
    Categoria: {
        type: String,
        required: true,
    },
    Referencia: {
        type: String,
        required: true,
    },
    CodigoBarras: {
        type: String,
        required: false,
    },
    Taxa: {
        type: String,
        required: false,
    },
    PrecoVenda: {
        type: Number,
        required: true,
    },
    CustoCommpra: {
        type: Number,
        required: true,
    },
    Fornecedor: {
        type: String,
        required: true,
    },

    //Informações Fiscais
    TipoFiscal: {
        type: String,
        required: true,
    },
    ICMSOrigem: {
        type: String,
        required: false,
    },
    NCM: {
        type: String,
        required: false,
    },
    ICMSouISSQN: {
        type: String,
        required: true,
    },
    GeneroFiscal: {
        type: String,
        required: true,
    },
    CEST: {
        type: String,
        required: false,
    },
    NBM: {
        type: String,
        required: false,
    },
    NBS: {
        type: String,
        required: true,
    },
    TipoServico: {
        type: String,
        required: true,
    },
    DeducaoFiscal: {
        type: String,
        required: false,
    },
    Unidade: {
        type: String,
        required: false,
    },

});

const inventarioServico = mongoose.model("inventarioServicos", InventarioServicoSchema);
module.exports = inventarioServico;