const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
// const ContatoModel = require("./models/Contato");
const PessoaJuridicaModel = require("./models/PessoaJuridica");
const PessoaFisicaModel = require("./models/PessoaFisica");
const InventarioProduto = require("./models/InventarioProduto");
const InventarioServico = require("./models/InventarioServico");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://db_admin:senha1234@sistemafiscal.orybm.mongodb.net/fiscal?retryWrites=true&w=majority", {
        useNewUrlParser: true,
    }
)
app.post("/insertJuridica", async(req, res) => {
    const nome = req.body.nome;
    const cnpj = req.body.cnpj;
    const nomelegal = req.body.nomelegal;
    const ie = req.body.ie;
    const telefone = req.body.telefone;
    const celular = req.body.celular;
    const email = req.body.email;
    const website = req.body.website;
    const perfilFiscal = req.body.perfilFiscal;
    const tx = req.body.tx;

    //endereço
    const cep = req.body.cep;
    const rua = req.body.rua;
    const numero = req.body.numero;
    const complemento = req.body.complemento;
    const distrito = req.body.distrito;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const pais = req.body.pais;

    const pessoaJuridica = new PessoaJuridicaModel({
        Nome: nome,
        CNPJ: cnpj,
        NomeLegal: nomelegal,
        IE: ie,
        Telefone: telefone,
        Celular: celular,
        Email: email,
        WebSite: website,
        PerfilFiscal: perfilFiscal,
        Tx: tx,

        //endereço
        CEP: cep,
        Rua: rua,
        Numero: numero,
        Complemento: complemento,
        Distrito: distrito,
        Cidade: cidade,
        Estado: estado,
        Pais: pais,

    });

    try {
        await pessoaJuridica.save();
        res.send("insert Data");
    } catch (err) {
        console.log(err);
    }
})

app.post("/insertFisica", async(req, res) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const rg = req.body.cpf;
    const cargo = req.body.cargo;
    const telefone = req.body.telefone;
    const celular = req.body.celular;
    const email = req.body.email;
    const website = req.body.website;
    const perfilFiscal = req.body.perfilFiscal;
    const empresa = req.body.empresa;


    //endereço
    const cep = req.body.cep;
    const rua = req.body.rua;
    const numero = req.body.numero;
    const complemento = req.body.complemento;
    const distrito = req.body.distrito;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const pais = req.body.pais;


    const pessoaFisica = new PessoaFisicaModel({
        Nome: nome,
        CPF: cpf,
        Rg: rg,
        Cargo: cargo,
        Telefone: telefone,
        Celular: celular,
        Email: email,
        WebSite: website,
        PerfilFiscal: perfilFiscal,
        Empresa: empresa,
        //endereço
        CEP: cep,
        Rua: rua,
        Numero: numero,
        Complemento: complemento,
        Distrito: distrito,
        Cidade: cidade,
        Estado: estado,
        Pais: pais,
    });
    try {
        await pessoaFisica.save();
        res.send("insert Data");
    } catch (err) {
        console.log(err);
    }
});


app.post("/insertInventarioProduto", async(req, res) => {
    const Nome = req.body.Nome;
    const PodeSerVendido = req.body.PodeSerVendido;
    const PodeSerComprado = req.body.PodeSerComprado;
    const Categoria = req.body.Categoria;
    const Referencia = req.body.Referencia;
    const CodigoBarras = req.body.CodigoBarras;
    const Taxa = req.body.CodigoBarras;
    const PrecoVenda = req.body.PrecoVenda;
    const CustoCommpra = req.body.CustoCommpra;
    const Fornecedor = req.body.Fornecedor;

    //Fiscal
    const TipoFiscal = req.body.TipoFiscal;
    const ICMSOrigem = req.body.ICMSOrigem;
    const NCM = req.body.NCM;
    const ICMSouISSQN = req.body.ICMSouISSQN;
    const GeneroFiscal = req.body.GeneroFiscal;
    const CEST = req.body.CEST;
    const NBM = req.body.NBM;
    const DeducaoFiscal = req.body.DeducaoFiscal;
    const Unidade = req.body.Unidade;

    const inventarioProduto = new InventarioProduto({
        Nome: Nome,
        PodeSerVendido: PodeSerVendido,
        PodeSerComprado: PodeSerComprado,
        Categoria: Categoria,
        Referencia: Referencia,
        CodigoBarras: CodigoBarras,
        Taxa: Taxa,
        PrecoVenda: PrecoVenda,
        CustoCommpra: CustoCommpra,
        Fornecedor: Fornecedor,

        //Fiscal
        TipoFiscal: TipoFiscal,
        ICMSOrigem: ICMSOrigem,
        NCM: NCM,
        ICMSouISSQN: ICMSouISSQN,
        GeneroFiscal: GeneroFiscal,
        CEST: CEST,
        NBM: NBM,
        DeducaoFiscal: DeducaoFiscal,
        Unidade: Unidade,
    });

    try {
        await inventarioProduto.save();
        res.send("insert Data");
    } catch (err) {
        console.log(err);
    }
})

app.post("/insertInventarioServico", async(req, res) => {
    const Nome = req.body.Nome;
    const PodeSerVendido = req.body.PodeSerVendido;
    const PodeSerComprado = req.body.PodeSerComprado;
    const Categoria = req.body.Categoria;
    const Referencia = req.body.Referencia;
    const CodigoBarras = req.body.CodigoBarras;
    const Taxa = req.body.CodigoBarras;
    const PrecoVenda = req.body.PrecoVenda;
    const CustoCommpra = req.body.CustoCommpra;
    const Fornecedor = req.body.Fornecedor;

    //Fiscal
    const TipoFiscal = req.body.TipoFiscal;
    const ICMSOrigem = req.body.ICMSOrigem;
    const NCM = req.body.NCM;
    const ICMSouISSQN = req.body.ICMSouISSQN;
    const GeneroFiscal = req.body.GeneroFiscal;
    const CEST = req.body.CEST;
    const NBM = req.body.NBM;
    const NBS = req.body.NBS;
    const TipoServico = req.body.TipoServico;
    const DeducaoFiscal = req.body.DeducaoFiscal;
    const Unidade = req.body.Unidade;

    const inventarioServico = new InventarioServico({
        Nome: Nome,
        PodeSerVendido: PodeSerVendido,
        PodeSerComprado: PodeSerComprado,
        Categoria: Categoria,
        Referencia: Referencia,
        CodigoBarras: CodigoBarras,
        Taxa: Taxa,
        PrecoVenda: PrecoVenda,
        CustoCommpra: CustoCommpra,
        Fornecedor: Fornecedor,

        //Fiscal
        TipoFiscal: TipoFiscal,
        ICMSOrigem: ICMSOrigem,
        NCM: NCM,
        ICMSouISSQN: ICMSouISSQN,
        GeneroFiscal: GeneroFiscal,
        CEST: CEST,
        NBM: NBM,
        NBS: NBS,
        TipoServico: TipoServico,
        DeducaoFiscal: DeducaoFiscal,
        Unidade: Unidade,
    });

    try {
        await inventarioServico.save();
        res.send("insert Data");
    } catch (err) {
        console.log(err);
    }
})



app.listen(3001, () => {
    console.log("Server running on port 3001....");
});