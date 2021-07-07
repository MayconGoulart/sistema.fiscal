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

    const [nome, setNome] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [cpf, setCpf] = useState("");

    const addContato = () => {
            
            if(tipoParceiro === 'pessoaJuridica'){
                Axios.post("http://localhost:3001/insertJuridica", {
                    nome: nome,
                    cnpj:cnpj,            
                });     
            }else{
                Axios.post("http://localhost:3001/insertFisica", {
                    nome: nome,
                    cpf: cpf,            
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
                                <TextField id="rg" label="RG" />
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
                            <TextField id="carog" label="Cargo" />
                            <TextField id="telefone" label="Telefone" />
                            <TextField id="celular" label="Celular" />
                            <TextField id="email" label="E-mail" />
                            <TextField id="website" label="Website" />
                        </div>
                    }

                    {tipoParceiro === "pessoaJuridica" &&

                        <div>
                            <h2>Informações (Pessoa Jurídica)</h2>
                            <TextField id="nome-legal" label="Nome Legal" />
                            <TextField id="inscricao-estadual" label="Inscrição Estadual" />
                            <TextField id="telefone" label="Telefone" />
                            <TextField id="celular" label="Celular" />
                            <TextField id="email" label="E-mail" />
                            <TextField id="empresa" label="Empresa" />
                            <TextField id="website" label="Website" />
                        </div>
                    }

                    <div>
                        <h2>Endereço</h2>
                        <TextField id="cep" label="CEP" /><Search />
                        <TextField id="rua" label="Rua" />
                        <TextField id="numero" label="Número" />
                        <TextField id="complemento" label="Complemento" />
                        <TextField id="distrito" label="Distrito" />
                        <TextField id="cidade" label="Cidade" />
                        <TextField id="estado" label="Estado" />
                        <TextField id="pais" label="País" />
                    </div>

                    <div>
                        <h2>Fiscal</h2>
                        {tipoParceiro === "pessoaFisica" &&
                            <div>
                                <FormControl>
                                    <FormLabel component="legend">Perfil Fiscal</FormLabel>
                                    <RadioGroup>
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
                                    <RadioGroup>
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
                                    <RadioGroup>
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
