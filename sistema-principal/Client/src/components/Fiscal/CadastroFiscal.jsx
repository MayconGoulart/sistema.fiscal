// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React, { useState, useEffect } from 'react';

// IMPORTAÇÃO DOS COMPONENTES
import { Button, Modal, Table } from 'react-bootstrap';
import { FormControlLabel, TextField, Select, FormControl, MenuItem, InputLabel } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './fiscal.css';

function CadastroFiscal() {

    const history = useHistory();

    const [pessoaFisica, setPessoaFisica] = useState([])
    const [pessoaJuridica, setPessoaJuridica] = useState([])

    const [id_parceiro, setIDParceiro] = useState(-1);
    const [perfilFiscal, setPerfilFiscal] = useState("");


    const [produto, setProduto] = useState([])
    const [servico, setServico] = useState([])
    const [id_produto_servico, setIDProdutoServico] = useState(-1);



    const [valor, setValor] = useState(0);
    const [qtd, setQtd] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);




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

        setServico(data4);

    }, []);


    //adiciona novos produtos ao vetor
    function novoProdutoServico() {


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
                valorVenda:varVenda,
                valTotal: valorTotal
            }

        ]);

        console.log(infos);
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

    function addProduto(){

        console.log(infos);
        setLgShow(false);
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
                                <Select id="operaca-fiscal">
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
                                <Select id="finalidade">
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
                                <Select id="consumidor-final">
                                    <MenuItem value={"0"}>Não</MenuItem>
                                    <MenuItem value={"1"}>Sim</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl>
                                <InputLabel id="presenca-comprador">Presença do Comprador</InputLabel>
                                <Select id="presenca-comprador">
                                    <MenuItem value={"nao"}>Não se Aplica</MenuItem>
                                    <MenuItem value={"operacao-presencial"}>Operação Presencial</MenuItem>
                                    <MenuItem value={"nao-presencial-internet"}>Não Presencial - Internet</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl>
                                <InputLabel id="tipo-documento">Tipo do Documento</InputLabel>
                                <Select id="tipo-documento">
                                    <MenuItem value={"1"}>01 - Nota Fiscal</MenuItem>
                                    <MenuItem value={"2"}>02 - Nota Fiscal de Venda a COnsumidor</MenuItem>
                                    <MenuItem value={"55"}>55 - Nota Fiscal Eletrônica - NF-e</MenuItem>
                                    <MenuItem value={"se"}>SE - Nota Fiscal de Serviço Eletrônica - NFS-e</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <TextField label="Chave" />
                        </div>

                        <div>
                            <FormControl>
                                <InputLabel id="serie-documento">Série do Documento</InputLabel>
                                <Select id="serie-documento">
                                    <MenuItem value={"1"}>Série 1</MenuItem>
                                    <MenuItem value={"2"}>Série 2</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                    </div>

                    <div className="info-gerais">
                        <h2 className="titulo-info-gerais">Companhia</h2>

                        <TextField label="Nome Legal da Empresa " />
                        <TextField label="Nome da Empresa" />
                        <TextField label="CNPJ" />
                        <TextField label="Inscrição Estadual" />
                        <TextField label="Inscrição Municipal" />
                        <TextField label="Quadro Fiscal" />
                        <TextField label="Cidade" />
                        <TextField label="Distrito" />
                        <TextField label="Rua" />
                        <TextField label="Número" />
                        <TextField label="Estado" />
                        <TextField label="País" />
                        <TextField label="CEP" />

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
                        <TextField label="ICMS Base" />
                        <TextField label="ICMS Value" />

                        <h3>IPI</h3>
                        <TextField label="IPI Base" />
                        <TextField label="IPI Value" />

                        <h3>ISSQN</h3>
                        <TextField label="ISSQN Base" />
                        <TextField label="ISSQN Value" />

                        <h3>PIS</h3>
                        <TextField label="PIS Base" />
                        <TextField label="PIS Value" />

                        <h3>COFINS</h3>
                        <TextField label="COFINS Base" />
                        <TextField label="COFINS Value" />

                        <h3>CSLL</h3>
                        <TextField label="CSLL Base" />
                        <TextField label="CSLL Value" />

                        <h3>IRPJ</h3>
                        <TextField label="IRPJ Base" />
                        <TextField label="IRPJ Value" />

                        <h3>INSS</h3>
                        <TextField label="INSS Base" />
                        <TextField label="INSS Value" />

                        <h3>Montante</h3>
                        <TextField label="Valor Bruto" />
                        <TextField label="Imposto" />
                        <TextField label="Total" />

                    </div>

                    <div>
                        <Button variant="success">Salvar</Button>
                        <Button onClick={() => history.goBack()} variant="danger">Cancel</Button>
                    </div>

                </form>

            </section>


        </>
    );

}

export default CadastroFiscal;
