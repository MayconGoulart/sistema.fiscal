// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React, { useState, useEffect } from 'react';

// IMPORTAÇÃO DOS COMPONENTES
import { Button, Modal, Table } from 'react-bootstrap';
import { FormControlLabel, TextField, Select, FormControl, MenuItem, InputLabel, ListItemText, ListItem, List, Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Axios from "axios";
import Swal from 'sweetalert2'

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './fiscal.css';
import './../Inventario/inventario.css'

function CadastroFiscal() {

    const history = useHistory();

    const [pessoaFisica, setPessoaFisica] = useState([])
    const [pessoaJuridica, setPessoaJuridica] = useState([])

    const [id_parceiro, setIDParceiro] = useState(-1);
    const [perfilFiscal, setPerfilFiscal] = useState("");


    const [produto, setProduto] = useState([])
    const [servico, setServico] = useState([])
    const [id_produto_servico, setIDProdutoServico] = useState(-1);

    const [configList, setConfigList] = useState([]);

    const [valor, setValor] = useState(0);
    const [qtd, setQtd] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);


    //cadfiscal
    const [operacao, setOperacao] = useState(0);
    const [finalidade, setFinalidade] = useState(0);
    const [consumidorFinal, setConsumidorFinal] = useState(0);
    const [presencaComprador, setPresencaComprador] = useState(0);
    const [tipoDoc, setTipoDoc] = useState(0);
    const [chave, setChave] = useState(0);
    const [serieDoc, setSerieDoc] = useState(0);


    const [ICMSBase, setICMSBase] = useState(0);
    const [ICMSValue, setICMSValue] = useState(0);
    const [IPIBase, setIPIBase] = useState(0);
    const [IPIValue, setIPIValue] = useState(0);
    const [ISSQNBase, setISSQNBase] = useState(0);
    const [ISSQNValue, setISSQNValue] = useState(0);
    const [PISBase, setPISBase] = useState(0);
    const [PISValue, setPISValue] = useState(0);
    const [COFINSBase, setCOFINSBase] = useState(0);
    const [COFINSValue, setCOFINSValue] = useState(0);
    const [CSLLBase, setCSLLBase] = useState(0);
    const [CSLLValue, setCSLLValue] = useState(0);
    const [IRPJBase, setIRPJBase] = useState(0);
    const [IRPJValue, setIRPJValue] = useState(0);
    const [INSSBase, setINSSBase] = useState(0);
    const [INSSValue, setINSSValue] = useState(0);
    const [ValorBruto, setValorBruto] = useState(0);
    const [Imposto, setImposto] = useState(0);
    const [Total, setTotal] = useState(0);
    





    //juridica
    const [cnpj, setCnpj] = useState("");
    const [ie, setIe] = useState("");
    const [nomelegal, setNomeLegal] = useState("");
    const [tx, setTx] = useState("");

    //fisica
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [cargo, setCargo] = useState("");
    const [empresa, setEmpresa] = useState("");

    //Endereço
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [distrito, setDistrito] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [pais, setPais] = useState("");


    //config

    const [configid, setConfigID] = useState("");
    const [confignomelegal, setConfigNomeLegal] = useState("");
    const [confignomeempresa, setConfigNomeEmpresa] = useState("");
    const [configcnpj, setConfigCNPJ] = useState("");
    const [configie, setConfigIE] = useState("");
    const [configim, setConfigIM] = useState("");
    const [configquadrofiscal, setConfigQuadroFiscal] = useState("");
    const [configcidade, setConfigCidade] = useState("");
    const [configdistrito, setConfigDistrito] = useState("");
    const [configrua, setConfigRua] = useState("");
    const [confignumero, setConfigNumero] = useState("");
    const [configestado, setConfigEstado] = useState("");
    const [configpais, setConfigPais] = useState("");
    const [configcep, setConfigCEP] = useState("");

    // modal
    const [lgShow, setLgShow] = useState(false);

    //tabela
    const [infos, setInfos] = useState([]);


    // pessoa fisica
    useEffect(async () => {

        const response = await fetch("http://localhost:3001/pessoaFisica");
        const data = await response.json();

        setPessoaFisica(data);

        const response2 = await fetch("http://localhost:3001/pessoaJuridica");
        const data2 = await response2.json();

        setPessoaJuridica(data2);

        const response3 = await fetch("http://localhost:3001/inventarioProduto");
        const data3 = await response3.json();

        setProduto(data3);

        const response4 = await fetch("http://localhost:3001/inventarioServico");
        const data4 = await response4.json();

        const response5 = await fetch("http://localhost:3001/configuracao");
        const data5 = await response5.json();
        setConfigList(data5);

    }, []);


    //adiciona novos produtos ao vetor
    function novoProdutoServico() {


        if (id_produto_servico == -1) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Selecione um produto ou serviço!'
            })
            return;
        }

        if (valorTotal <= 0) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Valor total inválido!'
            })
            return;

        }

        let nomeProdutoServico = "";
        let varVenda = 0;

        //busca pelos servicos
        servico.forEach(element => {
            if (element._id == id_produto_servico) {

                nomeProdutoServico = element.Nome;
                varVenda = element.PrecoVenda;

            }

        });

        //busca pelos produtos
        produto.forEach(element => {
            if (element._id == id_produto_servico) {

                nomeProdutoServico = element.Nome;
                varVenda = element.PrecoVenda;

            }

        });

        console.log(nomeProdutoServico);

        // mantem os dados cadastrados e adiciona o novo
        setInfos([
            ...infos,
            {
                _id: Math.random(),
                nome: nomeProdutoServico,
                valorVenda: varVenda,
                valTotal: valorTotal
            }

        ]);

        console.log(infos);

        //reseta os campos
        setIDProdutoServico(-1);
        setQtd(0);
        setValor(0);
        setValorTotal(0);
    }

    function setDadosConfiguracoes(id_configuracoes) {
        configList.forEach(element => {
            if (element._id == id_configuracoes) {

                console.log(element._id + "=" + id_configuracoes);
                setConfigID(element._id);
                setConfigNomeLegal(element.NomeLegal);
                setConfigNomeEmpresa(element.NomeCompanhia);
                setConfigCNPJ(element.CNPJ);
                setConfigIE(element.InscricaoEstadual);
                setConfigIM(element.InscricaoMunicipal);
                setConfigQuadroFiscal(element.QuadroFiscal);
                setConfigCidade(element.Cidade);
                setConfigDistrito(element.Distrito);
                setConfigRua(element.Rua);
                setConfigNumero(element.Numero);
                setConfigEstado(element.Estado);
                setConfigPais(element.Pais);
                setConfigCEP(element.CEP);
            }
        });
    }

    function setDadosParceiro(id_parceiro) {

        setIDParceiro(id_parceiro);

        //busca pelas pessoas físicas
        pessoaFisica.forEach(element => {
            if (element._id == id_parceiro) {

                setEmpresa(element.Empresa);

                setCep(element.CEP);
                setRua(element.Rua);
                setNumero(element.Numero);
                setComplemento(element.Complemento);
                setDistrito(element.Distrito);
                setCidade(element.Cidade);
                setEstado(element.Estado);
                setPais(element.Pais);

                setPerfilFiscal(element.PerfilFiscal);
            }

        });

        //busca pelas pessoas juridicas 
        pessoaJuridica.forEach(element => {
            if (element._id == id_parceiro) {

                setEmpresa(element.Empresa);

                setCnpj(element.cnpj);
                setIe(element.ie);
                setNomeLegal(element.nomelegal);
                setCidade(element.Cidade);
                setEstado(element.Estado);
                setPais(element.Pais);
                setDistrito(element.Distrito);
                setRua(element.Rua)


            }

        });
    }

    function attValorTotalQtd(val) {
        setQtd(val);
        setValorTotal(valor * val);
    }


    async function attValor(id) {

        setIDProdutoServico(id);

        //busca pelos servicos
        servico.forEach(element => {
            if (element._id == id) {
                console.log(element)
                setValor(element.PrecoVenda);
            }

        });

        //busca pelos produtos
        produto.forEach(element => {
            if (element._id == id) {
                console.log(element)
                setValor(element.PrecoVenda);

            }

        });
    }

    function addProduto() {

        console.log(infos);
        setLgShow(false);
    }

    function addFiscal() {
         
        console.log(consumidorFinal);
            
        Axios.post("http://localhost:3001/insertFiscal", {
            operacao: operacao,
            finalidade:finalidade,
            consumidorFinal: consumidorFinal,
            presencaComprador: presencaComprador,
            tipoDoc: tipoDoc,
            chave: chave,
            serieDoc: serieDoc,    
            configid: configid,
            parceiroid: id_parceiro,
            produtoservicoid: id_produto_servico,
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
            CSLLBase: CSLLBase,
            CSLLValue: CSLLValue,
            IRPJBase: IRPJBase,
            IRPJValue: IRPJValue,
            INSSBase: INSSBase,
            INSSValue: INSSValue,
            ValorBruto: ValorBruto,
            Imposto: Imposto,
            Total: Total,
        });
    }

    return (
        <>

            <section className="infos-card">

                <form>

                    <div className="info-inicial">

                        <h2 className="titulo-info-gerais">"Tipo Documento" : "Número (APÓS CONFIRMAÇÃO)</h2>

                    </div>

                    <div className="info-gerais">

                        <div>
                            <FormControl>
                                <InputLabel id="operacao-fiscal">Operação</InputLabel>
                                <Select id="operaca-fiscal" onChange={(event) => {
                                    setOperacao(event.target.value);
                                }}>
                                    <MenuItem value={"venda"}>Venda</MenuItem>
                                    <MenuItem value={"bonificacao"}>Bonificação</MenuItem>
                                    <MenuItem value={"devolucao-venda"}>Devolução de Venda</MenuItem>
                                    <MenuItem value={"compra"}>Compra</MenuItem>
                                    <MenuItem value={"devolucao-compra"}>Devolução de Compra</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl>
                                <InputLabel id="finalidade">Finalidade</InputLabel>
                                <Select id="finalidade"onChange={(event) => {
                                    setFinalidade(event.target.value);
                                }}>
                                    <MenuItem value={"normal"}>Normal</MenuItem>
                                    <MenuItem value={"complementar"}>Complementar</MenuItem>
                                    <MenuItem value={"ajuste"}>Ajuste</MenuItem>
                                    <MenuItem value={"devolucao-mercadoria"}>Devolução Mercadoria</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl>
                                <InputLabel id="consumidor-final">Consumidor Final</InputLabel>
                                <Select id="consumidor-final"onChange={(event) => {
                                    setConsumidorFinal(event.target.value);
                                }}>
                                    <MenuItem value={false}>Não</MenuItem>
                                    <MenuItem value={true}>Sim</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl>
                                <InputLabel id="presenca-comprador">Presença do Comprador</InputLabel>
                                <Select id="presenca-comprador"onChange={(event) => {
                                    setPresencaComprador(event.target.value);
                                }}>
                                    <MenuItem value={"nao"}>Não se Aplica</MenuItem>
                                    <MenuItem value={"operacao-presencial"}>Operação Presencial</MenuItem>
                                    <MenuItem value={"nao-presencial-internet"}>Não Presencial - Internet</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl>
                                <InputLabel id="tipo-documento">Tipo do Documento</InputLabel>
                                <Select id="tipo-documento"onChange={(event) => {
                                    setTipoDoc(event.target.value);
                                }}>
                                    <MenuItem value={"1"}>01 - Nota Fiscal</MenuItem>
                                    <MenuItem value={"2"}>02 - Nota Fiscal de Venda a COnsumidor</MenuItem>
                                    <MenuItem value={"55"}>55 - Nota Fiscal Eletrônica - NF-e</MenuItem>
                                    <MenuItem value={"se"}>SE - Nota Fiscal de Serviço Eletrônica - NFS-e</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="campo-texto">
                            <TextField label="Chave" />
                        </div>

                        <div>
                            <FormControl>
                                <InputLabel id="serie-documento"onChange={(event) => {
                                    setSerieDoc(event.target.value);
                                }}>Série do Documento</InputLabel>
                                <Select id="serie-documento">
                                    <MenuItem value={"1"}>Série 1</MenuItem>
                                    <MenuItem value={"2"}>Série 2</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                    </div>

                    <div className="info-gerais">
                        <h2 className="titulo-info-gerais">Companhia</h2>

                        <div>
                            <FormControl>
                                <InputLabel >Companhia</InputLabel>
                                <Select onChange={(event) => {
                                    setDadosConfiguracoes(event.target.value);
                                }}>
                                    <MenuItem key={-1} value={-1} disabled>Selecione...</MenuItem>

                                    {configList.map(response => (
                                        <MenuItem key={response._id} value={response._id}>Companhia: {response.NomeCompanhia}</MenuItem>
                                    ))}

                                </Select>
                            </FormControl>
                        </div>


                        <List >
                            <ListItem ><ListItemText primary={"Nome Legal da Empresa: " + confignomelegal} /></ListItem>
                            <Divider />
                            <ListItem><ListItemText primary={"Nome da Empresa: " + confignomeempresa} /></ListItem>
                            <Divider />
                            <ListItem><ListItemText primary={"CNPJ: " + configcnpj} /></ListItem>
                            <Divider />
                            <ListItem><ListItemText primary={"Inscrição Estadual: " + configie} /></ListItem>
                            <Divider />
                            <ListItem><ListItemText primary={"Inscrição Municipal: " + configim} /></ListItem>
                            <Divider />
                            <ListItem><ListItemText primary={"Quadro Fiscal: " + configquadrofiscal} /></ListItem>
                            <Divider />
                            <ListItem><ListItemText primary={"Cidade: " + configcidade} /></ListItem>
                            <Divider />
                            <ListItem><ListItemText primary={"Distrito: " + configdistrito} /></ListItem>
                            <Divider />
                            <ListItem><ListItemText primary={"Rua: " + configrua} /></ListItem>
                            <Divider />
                            <ListItem><ListItemText primary={"Número: " + confignumero} /></ListItem>
                            <Divider />
                            <ListItem><ListItemText primary={"Estado: " + configestado} /></ListItem>
                            <Divider />
                            <ListItem><ListItemText primary={"País: " + configpais} /></ListItem>
                            <Divider />
                            <ListItem><ListItemText primary={"CEP: " + configcep} /></ListItem>
                            <Divider />
                        </List>
                    </div>

                    <div className="info-gerais">
                        <h2 className="titulo-info-gerais">Comprador</h2>

                        <div>
                            <FormControl>
                                <InputLabel id="parceiro-fisico-juridico">Parceiro</InputLabel>
                                <Select value={id_parceiro} onChange={(event) => {
                                    setDadosParceiro(event.target.value);
                                }} id="parceiro-fisico-juridico">
                                    <MenuItem key={-1} value={-1} disabled>Selecione...</MenuItem>

                                    {pessoaFisica.map(response => (
                                        <MenuItem key={response._id} value={response._id}>Pessoa Física - {response.Nome}</MenuItem>
                                    ))}
                                    {pessoaJuridica.map(response => (
                                        <MenuItem key={response._id} value={response._id}>Pessoa Jurídica - {response.Nome}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                        <TextField value={nomelegal} label="Nome Legal da Empresa " />
                        <TextField value={empresa} label="Nome da Empresa" />
                        <TextField value={cnpj} label="CNPJ" />
                        <TextField label="Inscrição Estadual" />
                        <TextField value={ie} label="Inscrição Municipal" />
                        <TextField label="Quadro Fiscal" />
                        <TextField value={cidade} label="Cidade" />
                        <TextField value={distrito} label="Distrito" />
                        <TextField value={rua} label="Rua" />
                        <TextField value={numero} label="Número" />
                        <TextField value={estado} label="Estado" />
                        <TextField value={pais} label="País" />
                        <TextField value={cep} label="CEP" />

                    </div>

                    <div className="info-gerais">
                        <h2 className="titulo-info-gerais">Produtos e Serviços</h2>

                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Valor Venda</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>

                                {infos.map(response => (
                                    <tr key={response._id}>
                                        <td>{response.nome}</td>
                                        <td>{response.valorVenda}</td>
                                        <td>{response.valTotal}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </Table>

                        <Button onClick={() => setLgShow(true)}>Adicionar</Button>

                        <Modal
                            size="lg"
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Produtos/Serviços
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <InputLabel id="produto-servico">Produtos/Serviços</InputLabel>
                                <Select value={id_produto_servico} onChange={(event) => {
                                    attValor(event.target.value);
                                }} id="produto-servico">
                                    <MenuItem key={-1} value={-1} disabled>Selecione...</MenuItem>

                                    {produto.map(response => (
                                        <MenuItem key={response._id} value={response._id}>Produto - {response.Nome}</MenuItem>
                                    ))}
                                    {servico.map(response => (
                                        <MenuItem key={response._id} value={response._id}>Serviço - {response.Nome}</MenuItem>
                                    ))}
                                </Select>
                                <br /><br />
                                <TextField disabled value={valor} label="Valor" />
                                <TextField value={qtd} onChange={(event) => {
                                    attValorTotalQtd(event.target.value);
                                }} label="Quantidade" />

                                <br />  <br />  <br />
                                <h5>Impostos</h5>
                                <TextField disabled value={valorTotal} label="Total" />

                                <br />  <br />  <br />
                                <Button onClick={novoProdutoServico}>Adicionar</Button>
                                <br />  <br />  <br />
                                <h5>Adicionados</h5>

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>Valor Venda</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {infos.map(response => (
                                            <tr key={response._id}>
                                                <td>{response.nome}</td>
                                                <td>{response.valorVenda}</td>
                                                <td>{response.valTotal}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </Table>

                                <Button onClick={addProduto}>Adicionar produtos a nota</Button>
                            </Modal.Body>
                        </Modal>

                    </div>

                    <div className="info-gerais">
                        <h2 className="titulo-info-gerais">Totais</h2>

                        <h3>ICMS</h3>
                        <TextField label="ICMS Base" onChange={(event) => {
                                        setICMSBase(event.target.value);
                                    }}/>
                        <TextField label="ICMS Value" onChange={(event) => {
                                        setICMSValue(event.target.value);
                                    }} />

                        <h3>IPI</h3>
                        <TextField label="IPI Base" onChange={(event) => {
                                        setIPIBase(event.target.value);
                                    }}/>
                        <TextField label="IPI Value" onChange={(event) => {
                                        setIPIValue(event.target.value);
                                    }}/>

                        <h3>ISSQN</h3>
                        <TextField label="ISSQN Base" onChange={(event) => {
                                        setISSQNBase(event.target.value);
                                    }}/>
                        <TextField label="ISSQN Value" onChange={(event) => {
                                        setISSQNValue(event.target.value);
                                    }}/>

                        <h3>PIS</h3>
                        <TextField label="PIS Base" onChange={(event) => {
                                        setPISBase(event.target.value);
                                    }}/>
                        <TextField label="PIS Value"onChange={(event) => {
                                        setPISValue(event.target.value);
                                    }} />

                        <h3>COFINS</h3>
                        <TextField label="COFINS Base" onChange={(event) => {
                                        setCOFINSBase(event.target.value);
                                    }} />
                        <TextField label="COFINS Value" onChange={(event) => {
                                        setCOFINSValue(event.target.value);
                                    }}/>

                        <h3>CSLL</h3>
                        <TextField label="CSLL Base" onChange={(event) => {
                                        setCSLLBase(event.target.value);
                                    }}/>
                        <TextField label="CSLL Value" onChange={(event) => {
                                        setCSLLValue(event.target.value);
                                    }}/>

                        <h3>IRPJ</h3>
                        <TextField label="IRPJ Base" onChange={(event) => {
                                        setIRPJBase(event.target.value);
                                    }}/>
                        <TextField label="IRPJ Value"onChange={(event) => {
                                        setIRPJValue(event.target.value);
                                    }} />

                        <h3>INSS</h3>
                        <TextField label="INSS Base"onChange={(event) => {
                                        setINSSBase(event.target.value);
                                    }} />
                        <TextField label="INSS Value" onChange={(event) => {
                                        setINSSValue(event.target.value);
                                    }}/>

                        <h3>Montante</h3>
                        <TextField label="Valor Bruto" onChange={(event) => {
                                        setValorBruto(event.target.value);
                                    }}/>
                        <TextField label="Imposto" onChange={(event) => {
                                        setImposto(event.target.value);
                                    }} />
                        <TextField label="Total" onChange={(event) => {
                                        setTotal(event.target.value);
                                    }}/>

                    </div>

                    <div className="button-save">
                        <Button variant="success">Salvar</Button>
                        <Button onClick={() => history.goBack()} variant="danger">Cancel</Button>
                    </div>

                </form>

            </section>


        </>
    );

}

export default CadastroFiscal;
