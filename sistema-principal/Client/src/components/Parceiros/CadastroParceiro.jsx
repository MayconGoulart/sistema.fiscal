// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React, { useState } from 'react';
import useInput from 'use-input-hook';

// IMPORTAÇÃO DOS COMPONENTES
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
import { Person, Search } from '@material-ui/icons';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './parceiros.css';

import Axios from "axios";


function CadastroParceiro() {

    const [data] = useState({ pessoaFisica: "pessoaFisica", pessoaJuridica: "pessoaJuridica" });
    const [tipoParceiro, setTipoParceiro] = useInput("");

    //ambos
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [perfilFiscal, setPerfilFiscal] = useState("");

    //juridica
    const [cnpj, setCnpj] = useState("");
    const [ie, setIe] = useState("");
    const [nomelegal, setNomeLegal] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [tx, setTx] = useState("");
      
    //fisica
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");
    const [cargo, setCargo] = useState("");
    
    //Endereço
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [distrito, setDistrito] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [pais, setPais] = useState("");

    
    const addContato = () => {
            
            if(tipoParceiro === 'pessoaJuridica'){
                Axios.post("http://localhost:3001/insertJuridica", {
                    nome: nome,
                    cnpj:cnpj,
                    ie: ie,
                    nomelegal: nomelegal,
                    empresa: empresa,
                    telefone: telefone,
                    celular: celular,
                    email: email,
                    website: website,
                    cep: cep,
                    rua: rua,
                    numero: numero,
                    complemento: complemento,
                    distrito: distrito,
                    cidade: cidade,
                    estado: estado,
                    pais: pais,   
                    perfilFiscal: perfilFiscal,
                    tx: tx,
                });     
            }else{                
                Axios.post("http://localhost:3001/insertFisica", {
                    nome: nome,
                    cpf: cpf,
                    rg: rg,
                    cargo: cargo,
                    telefone: telefone,
                    celular: celular,
                    email: email,
                    website: website,
                    perfilFiscal: perfilFiscal,
                    cep: cep,
                    rua: rua,
                    numero: numero,
                    complemento: complemento,
                    distrito: distrito,
                    cidade: cidade,
                    estado: estado,
                    pais: pais,
                });  
            }
                         
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e);
        console.log(tipoParceiro);
    }

    return (
        <>

            <Container className="md container-generico">

                <form onSubmit={handleSubmit}>

                    <div>
                        <Person style={{ fontSize: 50 }} />
                        <FormControl>
                            <RadioGroup>
                                <FormControlLabel id={data.pessoaFisica} value={data.pessoaFisica}
                                    checked={data.pessoaFisica === tipoParceiro} onChange={setTipoParceiro}
                                    control={<Radio />} label="Pessoa Física" />

                                <FormControlLabel id={data.pessoaJuridica} value={data.pessoaJuridica}
                                    checked={data.pessoaJuridica === tipoParceiro} onChange={setTipoParceiro}
                                    control={<Radio />} label="Pessoa Jurídica" />
                            </RadioGroup>
                        </FormControl>
                        <TextField id="nome" label="Nome" onChange={(event) => {
                            setNome(event.target.value);
                        }} />
                        {tipoParceiro === "pessoaFisica" &&
                            <div>
                                <TextField id="cpf" label="CPF" onChange={(event) => {
                                    setCpf(event.target.value);
                                }}/>
                                <TextField id="rg" label="RG" onChange={(event) => {
                                    setRg(event.target.value);
                                }}/>
                            </div>
                        }

                        {tipoParceiro === "pessoaJuridica" &&
                            <div>
                                <TextField id="cnpj" label="CNPJ" onChange={(event) => {
                                    setCnpj(event.target.value);
                                }} />
                            </div>
                        }

                    </div>

                    {tipoParceiro === "pessoaFisica" &&

                        <div>
                            <h2>Informações (Pessoa Física)</h2>
                            <TextField id="cargo" label="Cargo" onChange={(event) => {
                                    setCargo(event.target.value);
                                }}/>
                            <TextField id="telefone" label="Telefone" onChange={(event) => {
                                    setTelefone(event.target.value);
                                }} />
                            <TextField id="celular" label="Celular" onChange={(event) => {
                                    setCelular(event.target.value);
                                }}/>
                            <TextField id="email" label="E-mail" onChange={(event) => {
                                    setEmail(event.target.value);
                                }}/>
                            <TextField id="website" label="Website" onChange={(event) => {
                                    setWebsite(event.target.value);
                                }}/>
                        </div>
                    }

                    {tipoParceiro === "pessoaJuridica" &&

                        <div>
                            <h2>Informações (Pessoa Jurídica)</h2>
                            <TextField id="nome-legal" label="Nome Legal" onChange={(event) => {
                                    setNomeLegal(event.target.value);
                                }}/>
                            <TextField id="inscricao-estadual" label="Inscrição Estadual" onChange={(event) => {
                                    setIe(event.target.value);
                                }}/>
                            <TextField id="telefone" label="Telefone" onChange={(event) => {
                                    setTelefone(event.target.value);
                                }}/>
                            <TextField id="celular" label="Celular" onChange={(event) => {
                                    setCelular(event.target.value);
                                }}/>
                            <TextField id="email" label="E-mail" onChange={(event) => {
                                    setEmail(event.target.value);
                                }}/>
                            <TextField id="empresa" label="Empresa" onChange={(event) => {
                                    setEmpresa(event.target.value);
                                }}/>
                            <TextField id="website" label="Website" onChange={(event) => {
                                    setWebsite(event.target.value);
                                }}/>
                        </div>
                    }

                    <div>
                        <h2>Endereço</h2>
                        <TextField id="cep" label="CEP" onChange={(event) => {
                                    setCep(event.target.value);
                                }}/><Search />
                        <TextField id="rua" label="Rua" onChange={(event) => {
                                    setRua(event.target.value);
                                }}/>
                        <TextField id="numero" label="Número" onChange={(event) => {
                                    setNumero(event.target.value);
                                }}/>
                        <TextField id="complemento" label="Complemento" onChange={(event) => {
                                    setComplemento(event.target.value);
                                }}/>
                        <TextField id="distrito" label="Distrito" onChange={(event) => {
                                    setDistrito(event.target.value);
                                }}/>
                        <TextField id="cidade" label="Cidade" onChange={(event) => {
                                    setCidade(event.target.value);
                                }}/>
                        <TextField id="estado" label="Estado" onChange={(event) => {
                                    setEstado(event.target.value);
                                }}/>
                        <TextField id="pais" label="País" onChange={(event) => {
                                    setPais(event.target.value);
                                }}/>
                    </div>

                    <div>
                        <h2>Fiscal</h2>
                        {tipoParceiro === "pessoaFisica" &&
                            <div>
                                <FormControl>
                                    <FormLabel component="legend">Perfil Fiscal</FormLabel>
                                    <RadioGroup onChange={(event) => {setPerfilFiscal(event.target.value);}} >
                                        <FormControlLabel value="contribuinte" control={<Radio />} label="Contribuinte" />
                                        <FormControlLabel value="nao-contribuinte" control={<Radio />} label="Não Contribuinte" />
                                        <FormControlLabel value="isento" control={<Radio />} label="Isento" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        }

                        {tipoParceiro === "pessoaJuridica" &&
                            <div>
                                <TextField id="inscricao-municipal" label="Inscrição Municipal" />
                                <FormControl>
                                    <FormLabel component="legend">Perfil Fiscal (Jurídico)</FormLabel>
                                    <RadioGroup onChange={(event) => {setPerfilFiscal(event.target.value);}}>
                                        <FormControlLabel value="contribuinte-sn" control={<Radio />} label="Contribuinte Simples Nacional" />
                                        <FormControlLabel value="nao-contribuinte-sn" control={<Radio />} label="Simples Nacional Não Contribuinte" />
                                        <FormControlLabel value="isento-sn" control={<Radio />} label="Simples Nacional Isento" />
                                        <FormControlLabel value="contribuinte" control={<Radio />} label="Contribuinte" />
                                        <FormControlLabel value="nao-contribuinte" control={<Radio />} label="Não Contribuinte" />
                                        <FormControlLabel value="isento" control={<Radio />} label="Isento" />
                                    </RadioGroup>
                                </FormControl>
                                <FormControl>
                                    <FormLabel component="legend">Tax Framework</FormLabel>
                                    <RadioGroup onChange={(event) => {setTx(event.target.value);}}>
                                        <FormControlLabel value="simples-nacional" control={<Radio />} label="Simples Nacional" />
                                        <FormControlLabel value="lucro-real" control={<Radio />} label="Lucro Real" />
                                        <FormControlLabel value="lucro-presumido" control={<Radio />} label="Lucro Presumido" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        }

                    </div>

                    <div>
                        <Button onClick={addContato} variant="success">Salvar</Button>
                        <Button variant="danger">Cancelar</Button>
                    </div>

                </form>

            </Container>


        </>
    );

}

export default CadastroParceiro;
