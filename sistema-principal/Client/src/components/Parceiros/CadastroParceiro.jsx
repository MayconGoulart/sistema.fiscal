// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React, { useState } from 'react';
import useInput from 'use-input-hook';
import { Link } from 'react-router-dom';

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

    
    const addContato = () => {
            
            if(tipoParceiro === 'pessoaJuridica'){
                Axios.post("http://localhost:3001/insertJuridica", {
                    nome: nome,
                    cnpj:cnpj,
                    ie: ie,
                    nomelegal: nomelegal,
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
                    empresa: empresa,
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

            <section class="infos-card"> 

                <form onSubmit={handleSubmit}>

                    <div class="info-inicial">
                        <div class="icon-inicial">
                             <Person style={{ fontSize: 80 }} />
                        </div>
                       
                       <div> 
                           <div>
                               <TextField id="nome" label="Nome" onChange={(event) => {
                                    setNome(event.target.value);
                                }} />
                           </div>
                           <div>
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
                           </div> 
                       </div>
                    </div>

                    {tipoParceiro === "pessoaFisica" &&

                        <div class="info-gerais">
                            <h2 class="titulo-info-gerais">Informações (Pessoa Física)</h2>
                            <div class="info-gerais-conteudo">
                                <div class="info-gerais-1">
                                    <TextField id="cpf" label="CPF" onChange={(event) => {
                                        setCpf(event.target.value);
                                    }}/>
                                    <TextField id="rg" label="RG" onChange={(event) => {
                                        setRg(event.target.value);
                                    }}/>
                                    <TextField id="cargo" label="Cargo" onChange={(event) => {
                                        setCargo(event.target.value);
                                    }}/>
                                    <TextField id="telefone" label="Telefone" onChange={(event) => {
                                        setTelefone(event.target.value);
                                    }} />
                                </div>
                                
                                <div class="info-gerais-2">
                                    <TextField id="celular" label="Celular" onChange={(event) => {
                                        setCelular(event.target.value);
                                    }}/>
                                    <TextField id="email" label="E-mail" onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}/>
                                    <TextField id="website" label="Website" onChange={(event) => {
                                        setWebsite(event.target.value);
                                    }}/>
                                    <TextField id="empresa" label="Empresa" onChange={(event) => {
                                        setEmpresa(event.target.value);
                                    }}/>
                                </div>
                            </div>
                            
                        </div>
                    }

                    {tipoParceiro === "pessoaJuridica" &&

                        <div class="info-gerais">
                            <h2 class="titulo-info-gerais">Informações (Pessoa Jurídica)</h2>
                            <div class="info-gerais-conteudo">
                                <div class="info-gerais-1">
                                    <TextField id="nome-legal" label="Nome Legal" onChange={(event) => {
                                    setNomeLegal(event.target.value);
                                        }}/>
                                    <TextField id="cnpj" label="CNPJ" onChange={(event) => {
                                            setCnpj(event.target.value);
                                        }} />      
                                    <TextField id="inscricao-estadual" label="Inscrição Estadual" onChange={(event) => {
                                            setIe(event.target.value);
                                        }}/>
                                    <TextField id="telefone" label="Telefone" onChange={(event) => {
                                            setTelefone(event.target.value);
                                        }}/>
                                    </div>
                                <div class="info-gerais-2">
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
                            </div>
                        </div>
                    }

                    <div class="info-gerais">
                        <h2 class="titulo-info-gerais">Endereço</h2>
                        <div class="info-gerais-conteudo">
                            <div class="info-gerais-1">
                                <div>
                                    <TextField id="cep" label="CEP" onChange={(event) => {
                                            setCep(event.target.value);
                                        }}/><Search />
                                </div>

                                <TextField id="rua" label="Rua" onChange={(event) => {
                                            setRua(event.target.value);
                                        }}/>
                                <TextField id="numero" label="Número" onChange={(event) => {
                                            setNumero(event.target.value);
                                        }}/>
                                <TextField id="complemento" label="Complemento" onChange={(event) => {
                                            setComplemento(event.target.value);
                                        }}/>
                            </div>
                            <div class="info-gerais-2">
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
                        </div>

                       
                    </div>

                    <div class="info-gerais">
                        {tipoParceiro === "pessoaFisica" &&
                            <div>
                                <h2 class="titulo-info-gerais">Fiscal</h2>
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
                                <h2 class="titulo-info-gerais">Fiscal</h2>
                                <TextField id="inscricao-municipal" label="Inscrição Municipal" />
                                <div class="perfil-taxas info-gerais-conteudo">
                                    <div>
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
                                    </div>
                                    <div>
                                         <FormControl>
                                        <FormLabel component="legend">Tax Framework</FormLabel>
                                        <RadioGroup onChange={(event) => {setTx(event.target.value);}}>
                                            <FormControlLabel value="simples-nacional" control={<Radio />} label="Simples Nacional" />
                                            <FormControlLabel value="lucro-real" control={<Radio />} label="Lucro Real" />
                                            <FormControlLabel value="lucro-presumido" control={<Radio />} label="Lucro Presumido" />
                                        </RadioGroup>
                                    </FormControl>
                                    </div>
                                   
                                </div>
                                
                            </div>
                        }

                    </div>

                    <div class="btn-salvar">
                        <Button onClick={addContato} variant="success">Salvar</Button>
                        <Button variant="danger">Cancelar</Button>
                    </div>

                </form>

            </section>


        </>
    );

}

export default CadastroParceiro;
