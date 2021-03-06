const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
// const ContatoModel = require("./models/Contato");
const PessoaJuridicaModel = require("./models/PessoaJuridica");
const PessoaFisicaModel = require("./models/PessoaFisica");
const InventarioProduto = require("./models/InventarioProduto");
const InventarioServico = require("./models/InventarioServico");
const ConfiguracaoModel = require("./models/Configuracao");
const Fiscal = require("./models/Fiscal");

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb+srv://db_admin:senha1234@sistemafiscal.orybm.mongodb.net/fiscal?retryWrites=true&w=majority", {
        useNewUrlParser: true,
    }
)


app.get("/notaFiscal", async(req, res) => {
    Fiscal.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


app.get("/pessoaFisica", async(req, res) => {
    PessoaFisicaModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

app.get("/pessoaJuridica", async(req, res) => {
    PessoaJuridicaModel.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

app.get("/inventarioServico", async(req, res) => {
    InventarioServico.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


app.get("/inventarioProduto", async(req, res) => {
    InventarioProduto.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

app.get("/configuracao", async(req, res) => {
    ConfiguracaoModel.find({}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})





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

    //endere??o
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

        //endere??o
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
        res.sendStatus(503, err);
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


    //endere??o
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
        //endere??o
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
        res.sendStatus(503, err);    }
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
        res.sendStatus(503, err);    }
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
        res.sendStatus(503, err);    }
})

app.post("/insertConfiguracao", async(req, res) => {
    const nomecompanhia = req.body.NomeCompanhia;
    const nomelegal = req.body.NomeLegal;
    const cnpj = req.body.CNPJ;
    const inscricaoestadual = req.body.InscricaoEstadual;
    const inscricaomunicipal = req.body.InscricaoMunicipal;
    const telefone = req.body.Telefone;
    const celular = req.body.Celular;
    const email = req.body.Email;
    const website = req.body.Website;

    //endere??o
    const cep = req.body.CEP;
    const rua = req.body.Rua;
    const numero = req.body.Numero;
    const complemento = req.body.Complemento;
    const distrito = req.body.Distrito;
    const cidade = req.body.Cidade;
    const estado = req.body.Estado;
    const pais = req.body.Pais;

    //fiscal
    const quadroFiscal = req.body.QuadroFiscal;
    const calculoLucro = req.body.CalculoLucro;
    const rendaAnual = req.body.RendaAnual;
    const faixaImpostoSimplificado = req.body.FaixaImpostoSimplificado;
    const porcentagemSimplificado = req.body.PorcentagemImpostoSimplificado;
    const pisCofins = req.body.PisCofins;
    const ipi = req.body.IPI;
    const icms = req.body.ICMS;
    const issqn = req.body.ISSQN;
    const csll = req.body.CSLL;
    const irpj = req.body.IRPJ;
    const inss = req.body.INSS;

    const configuracao = new ConfiguracaoModel({
        NomeCompanhia: nomecompanhia,
        NomeLegal: nomelegal,
        CNPJ: cnpj,
        InscricaoEstadual: inscricaoestadual,
        InscricaoMunicipal: inscricaomunicipal,
        Telefone: telefone,
        Celular: celular,
        Email: email,
        WebSite: website,

        //endere??o
        CEP: cep,
        Rua: rua,
        Numero: numero,
        Complemento: complemento,
        Distrito: distrito,
        Cidade: cidade,
        Estado: estado,
        Pais: pais,

        //Fiscal
        QuadroFiscal: quadroFiscal,
        CalculoLucro: calculoLucro,
        RendaAnual: rendaAnual,
        FaixaImpostoSimplificado: faixaImpostoSimplificado,
        PorcentagemImpostoSimplificado: porcentagemSimplificado,
        PisCofins: pisCofins,
        IPI: ipi,
        ICMS: icms,
        ISSQN: issqn,
        CSLL: csll,
        IRPJ: irpj,
        INSS: inss,
    });

    try {
        await configuracao.save();
        res.send("insert Data");
    } catch (err) {
        res.sendStatus(503, err);    }
})

app.post("/insertFiscal", async(req, res) => {
    //Tipodoc
    const Operacao = req.body.operacao;
    const Finalidade = req.body.finalidade;

    const ConsumidorFinal = req.body.consumidorFinal;
    console.log(ConsumidorFinal);
    const PresencaComprador = req.body.presencaComprador;
    const TipoDocumento = req.body.tipoDoc;
    const ChaveDocumento = req.body.chave;
    const Serie = req.body.serieDoc;

    //ids
    const configid = req.body.configid;
    const parceiroid = req.body.parceiroid;
    const produtoservicoid = req.body.produtoservicoid;

    //totais

    const ICMSBase = req.body.ICMSBase;
    const ICMSValue = req.body.ICMSValue;
    const IPIBase = req.body.IPIBase;
    const IPIValue = req.body.IPIValue;
    const ISSQNBase = req.body.ISSQNBase;
    const ISSQNValue = req.body.ISSQNValue;
    const PISBase = req.body.PISBase;
    const PISValue = req.body.PISValue;
    const COFINSBase = req.body.COFINSBase;
    const COFINSValue = req.body.COFINSValue;
    const CSLLBase = req.body.CSLLBase;
    const CSLLValue = req.body.CSLLValue;
    const IRPJBase = req.body.IRPJBase;
    const IRPJValue = req.body.IRPJValue;
    const INSSBase = req.body.INSSBase;
    const INSSValue = req.body.INSSValue;
    const ValorBruto = req.body.ValorBruto;
    const Imposto = req.body.Imposto;
    const Total = req.body.Total;

    const fiscal = new Fiscal({
        Operacao: Operacao,
        Finalidade: Finalidade,
        ConsumidorFinal: ConsumidorFinal,
        PresencaComprador: PresencaComprador,
        TipoDocumento: TipoDocumento,
        ChaveDocumento: ChaveDocumento,
        Serie: Serie,
        Compania_id: configid,
        Comprador_id: parceiroid,
        Produto_id: produtoservicoid,

        //Fiscal
        ICMSBase: ICMSBase,
        ICMSValue: ICMSValue,
        IPIBase: IPIBase,
        IPIValue: IPIValue,
        ISSQNBase: ISSQNBase,
        ISSQNValue: ISSQNValue,
        PISBase: PISBase,
        PISValue: PISValue,
        COFINSBase: COFINSBase,
        COFINSValue: COFINSValue,
        CSSLBase: CSLLBase,
        CSSLValue: CSLLValue,
        IRPJBase: IRPJBase,
        IRPJValue: IRPJValue,
        INSSBase: INSSBase,
        INSSValue: INSSValue,
        ValorBruto: ValorBruto,
        ValorDesconto: Imposto,
        ValorSeguro: Total
    });

    try {
        await fiscal.save();
        res.send("insert Data");
    } catch (err) {
        console.log(err);
    }
})

app.put("/updatePFisica", async(req, res) => {
    const id = req.body.id;
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


    //endere??o
    const cep = req.body.cep;
    const rua = req.body.rua;
    const numero = req.body.numero;
    const complemento = req.body.complemento;
    const distrito = req.body.distrito;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const pais = req.body.pais;

    try {
        await PessoaFisicaModel.findById(id, (err, updateFisica) => {
            updateFisica.Nome = nome,
                updateFisica.CPF = cpf,
                updateFisica.Rg = rg,
                updateFisica.Cargo = cargo,
                updateFisica.Telefone = telefone,
                updateFisica.Celular = celular,
                updateFisica.Email = email,
                updateFisica.WebSite = website,
                updateFisica.PerfilFiscal = perfilFiscal,
                updateFisica.Empresa = empresa,
                //endere??o
                updateFisica.CEP = cep,
                updateFisica.Rua = rua,
                updateFisica.Numero = numero,
                updateFisica.Complemento = complemento,
                updateFisica.Distrito = distrito,
                updateFisica.Cidade = cidade,
                updateFisica.Estado = estado,
                updateFisica.Pais = pais,
                updateFisica.save();
            res.send("Update Data");
        });
    } catch (err) {
        res.sendStatus(503, err);    }
});

app.put("/updatePJuridica", async(req, res) => {
    const id = req.body.id;
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

    //endere??o
    const cep = req.body.cep;
    const rua = req.body.rua;
    const numero = req.body.numero;
    const complemento = req.body.complemento;
    const distrito = req.body.distrito;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const pais = req.body.pais;

    try {
        await PessoaJuridicaModel.findById(id, (err, updateJuridica) => {
            updateJuridica.Nome = nome,
                updateJuridica.CNPJ = cnpj,
                updateJuridica.NomeLegal = nomelegal,
                updateJuridica.IE = ie,
                updateJuridica.Telefone = telefone,
                updateJuridica.Celular = celular,
                updateJuridica.Email = email,
                updateJuridica.WebSite = website,
                updateJuridica.PerfilFiscal = perfilFiscal,
                updateJuridica.Tx = tx,

                //endere??o
                updateJuridica.CEP = cep,
                updateJuridica.Rua = rua,
                updateJuridica.Numero = numero,
                updateJuridica.Complemento = complemento,
                updateJuridica.Distrito = distrito,
                updateJuridica.Cidade = cidade,
                updateJuridica.Estado = estado,
                updateJuridica.Pa??s = pais,
                updateJuridica.save();
            res.send("Update Data");
        });
    } catch (err) {
        res.sendStatus(503, err);    }
});

app.delete("/deletePFisica/:id", async(req, res) => {
    const id = req.params.id;

    await PessoaFisicaModel.findByIdAndRemove(id).exec();
    res.send("Deleted");
});

app.delete("/deletePJuridica/:id", async(req, res) => {
    const id = req.params.id;

    await PessoaJuridicaModel.findByIdAndRemove(id).exec();
    res.send("Deleted");
});

app.delete("/deleteIProduto/:id", async(req, res) => {
    const id = req.params.id;

    await InventarioProduto.findByIdAndRemove(id).exec();
    res.send("Deleted");
});

app.delete("/deleteIServico/:id", async(req, res) => {
    const id = req.params.id;

    await InventarioServico.findByIdAndRemove(id).exec();
    res.send("Deleted");
});

app.listen(3001, () => {
    console.log("Server running on port 3001....");
});