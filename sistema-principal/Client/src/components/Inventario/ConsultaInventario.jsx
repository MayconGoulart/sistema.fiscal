// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

// IMPORTAÇÃO DOS COMPONENTES
import { Checkbox, FormControlLabel, FormGroup, Select, FormControl, MenuItem, InputLabel } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
import StoreIcon from '@material-ui/icons/Store';
import { useHistory } from 'react-router-dom';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './inventario.css';
import Swal from 'sweetalert2'

import Axios from "axios";

function ConsultaInventario() {

    const history = useHistory();

    let { id, tipo } = useParams();
    console.log(id, tipo);

    //checkbox
    const [statusVendido, setStatusVedido] = useState();
    const [statusComprado, setStatusComprado] = useState();



    // Informações Gerais
    const [nome, setNome] = useState("");
    const [categoria, setCategoria] = useState("");
    const [referencia, setReferencia] = useState("");
    const [codigoBarras, setCodigoBarras] = useState("");
    const [taxas, setTaxas] = useState(-1);

    const [precoVenda, setPrecoVenda] = useState("");
    const [custoCompra, setCustoCompra] = useState("");
    const [fornecedor, setFornecedor] = useState("");


    //Fiscal
    const [tipoFiscal, setTipoFiscal] = useState(-1);
    const [icmsOrigem, setICMSOrigem] = useState(-1);
    const [ncm, setNCM] = useState(-1);
    const [icms_issqn, setICMS_ISSQN] = useState(-1);
    const [generoFiscal, setGeneroFiscal] = useState(-1);
    const [cest, setCest] = useState(-1);
    const [nbm, setNBM] = useState(-1);
    const [nbs, setNBS] = useState("");
    const [tipoServicoFiscal, setTipoServicoFiscal] = useState(-1);
    const [deducoes, setDeducoes] = useState("");
    const [unidade, setUnidades] = useState("");


    useEffect(async () => {
        async function fetchData() {

            if (tipo == "servico") {

                const response = await fetch("http://localhost:3001/inventarioServico");
                const dadosRetorno = await response.json();

                setTipoFiscal(9);
                setICMS_ISSQN(1);
                setNBS(1);

                dadosRetorno.forEach(element => {

                    if (element._id == id) {
                        
                        console.log(element);
                       
                    }
    
                });

            } else {

                const response = await fetch("http://localhost:3001/inventarioProduto");
                const dadosRetorno = await response.json();

                dadosRetorno.forEach(element => {

                    if (element._id == id) {

                        console.log(element.PodeSerVendido);

                        setCest(element.Cest);
                        setCategoria(element.Categoria);
                        setCodigoBarras(element.CodigoBarras);
                        setCustoCompra(element.CustoCompra);
                        setDeducoes(element.DeducaoFiscal);
                        setFornecedor(element.Fornecedor);
                        setGeneroFiscal(element.GeneroFiscal);
                        setICMSOrigem(element.ICMSOrigem);
                        setICMS_ISSQN(element.ICMSouISSQN);
                        setNBM(element.NBM);
                        setNCM(element.NCM);
                        setNome(element.Nome);
                        setStatusVedido(element.PodeSerVendido);
                        setStatusComprado(element.PsodeSerComprado);
                        setPrecoVenda(element.PrecoVenda);
                        setCustoCompra(element.CustoCompra);
                        setReferencia(element.Referencia);
                        setTaxas(element.Taxa);
                        setTipoFiscal(element.TipoFiscal);
                        setUnidades(element.Unidade);


                    }
    
                });
            }
            
            

        }
        fetchData()

    }, []);

    const salvar = async () => {


    }

    return (
        <>

            <section class="infos-card">

                <form>

                    <div class="info-inicial">
                        <div class="icon-inicial">
                            <StoreIcon style={{ fontSize: 80 }} />
                        </div>

                        <div>
                            <TextField value={nome} id="nome" label="Nome" onChange={(event) => {
                                setNome(event.target.value);
                            }} />
                            <FormGroup>
                                <FormControlLabel value={statusVendido} onChange={(event) => {
                                    setStatusVedido(event.target.checked);
                                }} control={<Checkbox />} label="Pode ser vendido" />
                                <FormControlLabel value={statusComprado} onChange={(event) => {
                                    setStatusComprado(event.target.checked);
                                }} control={<Checkbox />} label="Pode ser comprado" />
                            </FormGroup>
                        </div>

                    </div>

                    <div class="info-gerais">
                        <h2>Informações Gerais</h2>
                        <div class="info-gerais-conteudo">
                            <div class="info-gerais-1">

                                <TextField onChange={(event) => {
                                    setCategoria(event.target.value);
                                }} value={categoria} id="categoria" label="Categoria" />

                                <TextField onChange={(event) => {
                                    setReferencia(event.target.value);
                                }} value={referencia} id="referencia" label="Referência" />

                                <TextField onChange={(event) => {
                                    setCodigoBarras(event.target.value);
                                }} value={codigoBarras} id="barcode" label="Código de Barras" />

                            </div>
                            <div class="info-gerais-2">
                                <FormControl>
                                    <Select onChange={(event) => {
                                        setTaxas(event.target.value);
                                    }} value={taxas}>
                                        <MenuItem disabled value={-1}>Selecione as taxas...</MenuItem>
                                        <MenuItem value={0}>00%</MenuItem>
                                        <MenuItem value={1}>10%</MenuItem>
                                        <MenuItem value={2}>20%</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField pattern="[0-9]*" onChange={(event) => {
                                    setPrecoVenda(event.target.value);
                                }} value={precoVenda} id="preco" label="Preço de Venda" />

                                <TextField pattern="[0-9]*" onChange={(event) => {
                                    setCustoCompra(event.target.value);
                                }} value={custoCompra} id="custo" label="Custo de Compra" />

                                <TextField onChange={(event) => {
                                    setFornecedor(event.target.value);
                                }} value={fornecedor} id="fornecedor" label="Fornecedor" />

                            </div>
                        </div>
                    </div>

                    <div class="info-gerais">
                        <h2>Informações Fiscais</h2>
                        <div class="info-gerais-conteudo">
                            <div class="info-gerais-1">
                                <FormControl>
                                    <InputLabel>Tipo Fiscal</InputLabel>
                                    <Select value={tipoFiscal} onChange={(event) => {
                                        setTipoFiscal(event.target.value);
                                    }}>
                                        <MenuItem disabled value={-1}>Selecione...</MenuItem>
                                        <MenuItem value={0}>Mercadoria para Revenda</MenuItem>
                                        <MenuItem value={1}>Matéria-prima</MenuItem>
                                        <MenuItem value={2}>Embalagem</MenuItem>
                                        <MenuItem value={3}>Produto em Processo</MenuItem>
                                        <MenuItem value={4}>Produto Acabado</MenuItem>
                                        <MenuItem value={5}>Subproduto</MenuItem>
                                        <MenuItem value={6}>Produto Intermediário</MenuItem>
                                        <MenuItem value={7}>Material de Uso e Consumo</MenuItem>
                                        <MenuItem value={8}>Ativo Imobilizado</MenuItem>
                                        <MenuItem value={9}>Serviços</MenuItem>
                                        <MenuItem value={10}>Outros Insumos</MenuItem>
                                        <MenuItem value={11}>Outras</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <InputLabel>ICMS de Origem</InputLabel>
                                    <Select value={icmsOrigem} onChange={(event) => {
                                        setICMSOrigem(event.target.value);
                                    }}>

                                        <MenuItem disabled value={-1}>Selecione...</MenuItem>
                                        <MenuItem value={0}>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8</MenuItem>
                                        <MenuItem value={1}>1 - Estrangeira - Importação direta, exceto a indicada no código 6</MenuItem>
                                        <MenuItem value={2}>2 - Estrangeira - Adquirida no mercado interno, exceto a indicado no código 7</MenuItem>
                                        <MenuItem value={3}>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%</MenuItem>
                                        <MenuItem value={4}>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes</MenuItem>
                                        <MenuItem value={5}>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%</MenuItem>
                                        <MenuItem value={6}>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural</MenuItem>
                                        <MenuItem value={7}>7 - Estrangeira - Adquirida no mercado interno, sem similar, nacional, constante lista CAMEX e gás natural</MenuItem>
                                        <MenuItem value={8}>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <InputLabel>NCM</InputLabel>

                                    <Select value={ncm} onChange={(event) => {
                                        setNCM(event.target.value);
                                    }}>
                                        <MenuItem disabled value={-1}>Selecione...</MenuItem>
                                        <MenuItem value={1}>0000.00.00 - Sem NCM</MenuItem>
                                        <MenuItem value={2}>7200.00.00 - Ferro fundido, ferro e aço</MenuItem>
                                        <MenuItem value={3}>8100.00.00 - Outros metais comuns; cermets; obras desses materiais</MenuItem>
                                        <MenuItem value={4}>8300.00.00 - Obras diversas de metais comuns</MenuItem>
                                    </Select>

                                </FormControl>

                                <FormControl>
                                    <InputLabel>ICMS ou ISSQN</InputLabel>
                                    <Select value={icms_issqn} onChange={(event) => {
                                        setICMS_ISSQN(event.target.value);
                                    }}>
                                        <MenuItem disabled value={-1}>Selecione...</MenuItem>
                                        <MenuItem value={0}>ICMS</MenuItem>
                                        <MenuItem value={1}>ISSQN</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <InputLabel>Gênero Fiscal</InputLabel>
                                    <Select value={generoFiscal} onChange={(event) => {
                                        setGeneroFiscal(event.target.value);
                                    }}>
                                        <MenuItem disabled value={-1}>Selecione...</MenuItem>
                                        <MenuItem value={0}>00 - Serviço</MenuItem>
                                        <MenuItem value={1}>70 - Vidros e suas obras</MenuItem>
                                        <MenuItem value={2}>72 - Ferro fundido, ferro e aço</MenuItem>
                                        <MenuItem value={3}>83 - Obras diversas de metais comuns</MenuItem>
                                    </Select>
                                </FormControl>

                            </div>
                            <div class="info-gerais-2">
                                <FormControl>
                                    <InputLabel>CEST</InputLabel>
                                    <Select value={cest} onChange={(event) => {
                                        setCest(event.target.value);
                                    }}>
                                        <MenuItem disabled value={-1}>Selecione...</MenuItem>
                                        <MenuItem value={1}>01.004.00 - Reservatórios de óleo</MenuItem>
                                        <MenuItem value={2}>01.016.00 - Espelhos retrovisores</MenuItem>
                                        <MenuItem value={3}>01.017.00 - Lentes de faróis, lanternas e outros utensílios</MenuItem>
                                    </Select>
                                </FormControl>

                                <FormControl>
                                    <InputLabel>NBM</InputLabel>
                                    <Select value={nbm} onChange={(event) => {
                                        setNBM(event.target.value);
                                    }}>
                                        <MenuItem value={1}>4016.10.10 - Partes de veículos automóveis, tratores e máquinas autopropulsadas</MenuItem>
                                        <MenuItem value={2}>8408.20.00 - Motores dos tipos utilizados para propulsão de veículos automotores</MenuItem>
                                    </Select>
                                </FormControl>

                                {tipo === "servico" &&
                                    <>
                                        <FormControl>
                                            <InputLabel>NBS (Quando Tipo Fiscal for Serviço)</InputLabel>
                                            <Select value={nbs} onChange={(event) => {
                                                setNBS(event.target.value);
                                            }}>
                                                <MenuItem value={1}>1.2001.3 - Serviços de manutenção e reparação de máquiário e equipamentos de transporte</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <FormControl>
                                            <InputLabel value={tipoServicoFiscal} onChange={(event) => {
                                                setTipoServicoFiscal(event.target.value);
                                            }}>Tipo de Serviço - LC 116 (Quanto Tipo Fiscal for Serviço)</InputLabel>
                                            <Select>
                                                <MenuItem value={1}>14.01 - Lubrificação, limpeza, lustração (...)</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </>
                                }
                                <TextField value={deducoes} onChange={(event) => {
                                    setDeducoes(event.target.value);
                                }} id="deducoes" label="Deduções Fiscais" />


                                <TextField value={unidade} onChange={(event) => {
                                    setUnidades(event.target.value);
                                }} id="unidade" label="Unidade" />

                            </div>
                        </div>
                    </div>

                    <div class="btn-salvar">
                        <Button onClick={salvar} variant="success">Salvar</Button>
                        <Button onClick={() => history.goBack()} variant="danger">Cancel</Button>
                    </div>

                </form>

            </section>


        </>
    );

}

export default ConsultaInventario;
