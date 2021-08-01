const mongoose = require("mongoose");
const FiscalSchema = new mongoose.Schema({
    Operacao: {
        type: String,
        required: true,
    },
    Finalidade: {
        type: String,
        required: true,
    },
    ConsumidorFinal: {
        type: Boolean,
        required: true,
    },
    PresencaComprador: {
        type: String,
        required: false,
    },
    TipoDocumento: {
        type: String,
        required: true,
    },
    ChaveDocumento: {
        type: String,
        required: false,
    },
    Serie: {
        type: String,
        required: true,
    },
    Compania_id: {
        type: String,
        required: true,
    },
    Comprador_id: {
        type: String,
        required: true,
    },
    Produto_id: {
        type: String,
        required: true,
    },
    ICMSBase: {
        type: Number,
        required:false,
    },
    ICMSValue: {
        type: Number,
        required: false,
    },
    IPIBase: {
        type: Number,
        required: false,
    },
    IPIValue: {
        type: Number,
        required: false,
    },
    ISSQNBase: {
        type: Number,
        required: false,
    },
    ISSQNValue: {
        type: Number,
        required: false,
    },
    PISBase: {
        type: Number,
        required: false,
    },
    PISValue: {
        type: Number,
        required: false,
    },
    COFINSBase: {
        type: Number,
        required: false,
    },
    COFINSValue: {
        type: Number,
        required: false,
    },
    CSSLBase: {
        type: Number,
        required: false,
    },
    CSSLValue: {
        type: Number,
        required: false,
    },
    IRPJBase: {
        type: Number,
        required: false,
    },
    IRPJValue: {
        type: Number,
        required: false,
    },
    INSSBase: {
        type: Number,
        required: false,
    },
    INSSValue: {
        type: Number,
        required: false,
    },
    ValorBruto: {
        type: Number,
        required: false,
    },
    ValorDesconto: {
        type: Number,
        required: false,
    },
    ValorSeguro: {
        type: Number,
        required: false,
    },
    ValorFrete: {
        type: Number,
        required: false,
    },
    OutrosCustos: {
        type: Number,
        required: false,
    },
    Imposto: {
        type: Number,
        required: false,
    },
    Total: {
        type: Number,
        required: false,
    },
});


const Fiscal = mongoose.model("fiscal", FiscalSchema);
module.exports = Fiscal;