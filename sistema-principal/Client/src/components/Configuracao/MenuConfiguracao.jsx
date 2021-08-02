// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React, { useState } from 'react';

// IMPORTAÇÃO DOS COMPONENTES
import { Container, FormControl, TextField, Select, MenuItem, InputLabel } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { Person, Search } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './configuracao.css';

import Axios from "axios";

function Formulario() {

    const history = useHistory();

    // Informações Gerais
    const [nomeCompanhia, setNomeCompanhia] = useState("");
    const [nomeLegal, setNomeLegal] = useState("");
    const [cnpj, setCNPJ] = useState("");
    const [inscricaoEstadual, setInscricaoEstadual] = useState("");
    const [inscricaoMunicipal, setInscricaoMunicipal] = useState("");
    const [telefone, setTelefone] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebSite] = useState("");

    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [distrito, setDistrito] = useState(-1);
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [pais, setPais] = useState("");

    //Fiscal
    const [quadroFiscal, setQuadroFiscal] = useState("");
    const [calculoLucro, setCalculoLucro] = useState("");
    const [rendaAnual, setRendaAnual] = useState("");
    const [faixaImpostoSimplificado, setFaixaImpostoSimplificado] = useState("");
    const [porcentagemSimplificado, setPorcentagemImpostoSimplificado] = useState("");
    const [pisCofins, setPisCofins] = useState(-1);
    const [ipi, setIpi] = useState("");
    const [icms, setIcms] = useState("");
    const [issqn, setIssqn] = useState("");
    const [csll, setCsll] = useState(-1);
    const [irpj, setIrpj] = useState("");
    const [inss, setInss] = useState("");

    const add = () => {
        Axios.post("http://localhost:3001/insertConfiguracao", {
            NomeCompanhia: nomeCompanhia,
            NomeLegal: nomeLegal,
            CNPJ: cnpj,
            InscricaoEstadual: inscricaoEstadual,
            InscricaoMunicipal: inscricaoMunicipal,
            Telefone: telefone,
            Celular: celular,
            Email: email,
            Website: website,
            CEP: cep,
            Rua: rua,
            Numero: numero,
            Complemento: complemento,
            Distrito: distrito,
            Cidade: cidade,
            Estado: estado,
            Pais: pais,
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
    };

    return (
        <>

            <Container className="md container-generico">
                
                <form>

                    <div className="info-inicial">
                        <div class="icon-inicial">
                             <Person style={{ fontSize: 80 }} />
                        </div>

                        <div>
                            <div>
                                <TextField label="Nome da Companhia" onChange={(event) => {
                                    setNomeCompanhia(event.target.value);
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div className="info-gerais">
                        <h2 className="titulo-info-gerais">Informações Gerais</h2>
                        <div className="info-gerais-conteduo">
                            <div className="info-gerais-1">
                                <TextField label="Nome Legal" onChange={(event) => {
                                    setNomeLegal(event.target.value);
                                }}/>
                                <TextField label="CNPJ" onChange={(event) => {
                                    setCNPJ(event.target.value);
                                }}/>
                                <TextField label="Inscrição Estadual" onChange={(event) => {
                                    setInscricaoEstadual(event.target.value);
                                }}/>
                                <TextField label="Inscrição Municipal" onChange={(event) => {
                                    setInscricaoMunicipal(event.target.value);
                                }}/>
                                <TextField label="Telefone" onChange={(event) => {
                                    setTelefone(event.target.value);
                                }}/>
                            </div>
                            <div className="info-gerais-2">
                                <TextField label="Celular" onChange={(event) => {
                                    setCelular(event.target.value);
                                }}/>
                                <TextField label="E-mail"  onChange={(event) => {
                                    setEmail(event.target.value);
                                }}/>
                                <TextField label="Website"  onChange={(event) => {
                                    setWebSite(event.target.value);
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div className="ingo-gerais">
                        <h2 className="titulo-info-gerais">Endereço</h2>
                        <div class="info-gerais-conteudo">
                            <div className="info-gerais-1">
                                <TextField label="CEP" onChange={(event) => {
                                    setCep(event.target.value);
                                }}/><Search />
                                <TextField label="Rua" onChange={(event) => {
                                    setRua(event.target.value);
                                }}/>
                                <TextField label="Número" onChange={(event) => {
                                    setNumero(event.target.value);
                                }}/>
                                <TextField label="Complemento" onChange={(event) => {
                                    setComplemento(event.target.value);
                                }}/>
                            </div>
                            <div className="info-gerais-2">
                                <TextField label="Distrito" onChange={(event) => {
                                    setDistrito(event.target.value);
                                }}/>
                                <TextField label="Cidade" onChange={(event) => {
                                    setCidade(event.target.value);
                                }}/>
                                <TextField label="Estado" onChange={(event) => {
                                    setEstado(event.target.value);
                                }}/>
                                <TextField label="País" onChange={(event) => {
                                    setPais(event.target.value);
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div className="info-gerais">
                        <h2 className="titulo-info-gerais">Impostos</h2>

                        <div>
                            <h3 className="titulo-info-gerais">PIS/COFINS</h3>
                            <FormControl>
                                <InputLabel id="pis-cofins">PIS/COFINS</InputLabel>
                                <Select id="pis-cofins" onChange={(event) => {
                                    setPisCofins(event.target.value);
                                }}>
                                    <MenuItem value={"pis-cofins-simples-nacional"}>Simples Nacional</MenuItem>
                                    <MenuItem value={"pis-065-cofins-300"}>Regime de Incidência Cumulativa PIS 0,65% e COFINS 3,00%</MenuItem>
                                    <MenuItem value={"pis-165-cofins-760"}>Regime de Incidência Cumulativa PIS 1,65% e COFINS 7,60%</MenuItem>
                                    <MenuItem value={"pis-cofins-diferenciado"}>Regime de Incidência Diferenciada</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <h3 className="titulo-info-gerais">IPI</h3>
                            <FormControl>
                                <InputLabel id="ipi">IPI</InputLabel>
                                <Select id="ipi" onChange={(event) => {
                                    setIpi(event.target.value);
                                }}>
                                    <MenuItem value={"ipi-simples-nacional"}>IPI Outros</MenuItem>
                                    <MenuItem value={"ipi-nao-tributado"}>IPI NT</MenuItem>
                                    <MenuItem value={"ipi-insento"}>IPI Isento</MenuItem>
                                    <MenuItem value={"ipi-10"}>IPI 10%</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <h3 className="titulo-info-gerais">ICMS</h3>
                            <FormControl>
                                <InputLabel id="icms">ICMS</InputLabel>
                                <Select id="icms" onChange={(event) => {
                                    setIcms(event.target.value);
                                }}>
                                    <MenuItem value={"icms-10"}>ICMS 10%</MenuItem>
                                    <MenuItem value={"icms-20"}>ICMS 20%</MenuItem>
                                    <MenuItem value={"icms-30"}>ICMS 30%</MenuItem>
                                    <MenuItem value={"icms-nt"}>ICMS NT</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <h3 className="titulo-info-gerais">ISSQN</h3>
                            <FormControl>
                                <InputLabel id="issqn">ISSQN</InputLabel>
                                <Select id="issqn" onChange={(event) => {
                                    setIssqn(event.target.value);
                                }}>
                                    <MenuItem value={"issqn-00"}>ISSQN 0%</MenuItem>
                                    <MenuItem value={"issqn-10"}>ISSQN 10%</MenuItem>
                                    <MenuItem value={"issqn-nt"}>ISSQN NT</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <h3 className="titulo-info-gerais">CSLL</h3>
                            <FormControl>
                                <InputLabel id="csll" >csll</InputLabel>
                                <Select id="csll" onChange={(event) => {
                                    setCsll(event.target.value);
                                }}>
                                    <MenuItem value={"csll-00"}>CSLL 0%</MenuItem>
                                    <MenuItem value={"csll-10"}>CSLL 10%</MenuItem>
                                    <MenuItem value={"csll-nt"}>CSLL NT</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <h3 className="titulo-info-gerais">IRPJ</h3>
                            <FormControl>
                                <InputLabel id="irpj">IRPJ</InputLabel>
                                <Select id="irpj" onChange={(event) => {
                                    setIrpj(event.target.value);
                                }}>
                                    <MenuItem value={"irpj-00"}>IRPJ 0%</MenuItem>
                                    <MenuItem value={"irpj-10"}>IRPJ 10%</MenuItem>
                                    <MenuItem value={"irpj-nt"}>IRPJ NT</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <h3 className="titulo-info-gerais">INSS</h3>
                            <FormControl>
                                <InputLabel id="inss">INSS</InputLabel>
                                <Select id="inss" onChange={(event) => {
                                    setInss(event.target.value);
                                }}>
                                    <MenuItem value={"inss-00"}>INSS 0%</MenuItem>
                                    <MenuItem value={"inss-10"}>INSS 10%</MenuItem>
                                    <MenuItem value={"inss-nt"}>INSS NT</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div>
                        <div>
                            <Button onClick={add} variant="success">Salvar</Button>
                            <Button onClick={() => history.goBack()} variant="danger">Cancel</Button>
                        </div>

                    </div>

                </form>
                
            </Container>


        </>
    );

}

export default Formulario;
