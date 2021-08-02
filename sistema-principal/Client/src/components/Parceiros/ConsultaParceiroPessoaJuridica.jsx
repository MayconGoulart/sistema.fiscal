// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import useInput from 'use-input-hook';

// IMPORTAÇÃO DOS COMPONENTES
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
import { Person, Search } from '@material-ui/icons';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './parceiros.css';

import Axios from "axios";

function ConsultaParceiroPessoaJuridica() {

    const history = useHistory();

    let { id } = useParams();


    const [data] = useState({ pessoaFisica: "pessoaFisica", pessoaJuridica: "pessoaJuridica" });
    const [tipoParceiro, setTipoParceiro] = useState("pessoaJuridica");

    let dadosRetorno = [];

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


    //pessoa juridica
    useEffect(async () => {

        const response = await fetch("http://localhost:3001/pessoaJuridica");
        dadosRetorno = await response.json();

        dadosRetorno.forEach(element => {

            if (element._id == id) {

                console.log(element)
                setNome(element.Nome)
                setTelefone(element.Telefone)
                setCelular(element.Celular)
                setEmail(element.Email)
                setWebsite(element.WebSite)
                setPerfilFiscal(element.PerfilFiscal)

                setCnpj(element.CNPJ);
                setIe(element.IE)
                setNomeLegal(element.NomeLegal);
                setTx(element.Tx);

                setCep(element.CEP);
                setRua(element.Rua);
                setNumero(element.Numero);
                setComplemento(element.Complemento);
                setDistrito(element.Distrito);
                setCidade(element.Cidade);
                setEstado(element.Estado);
                setPais(element.Pais);
                setEmpresa(element.Empresa)
                setPerfilFiscal(element.PerfilFiscal);

            }

        });

    }, []);

    const updateJuridica = (id) =>{
        Axios.put("http://localhost:3001/updatePJuridica", {
            id: id,
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
        })

    };

    return (
        <>

            <section className="infos-card">

                <form >

                    <div className="info-inicial">
                        <div className="icon-inicial">
                            <Person style={{ fontSize: 80 }} />
                        </div>

                        <div>
                            <div>
                                <TextField id="nome" label="Nome" value={nome} onChange={(event) => {
                                    setNome(event.target.value);
                                }} />
                            </div>
                           
                        </div>
                    </div>

                    {tipoParceiro === "pessoaJuridica" &&

                        <div className="info-gerais">
                            <h2 className="titulo-info-gerais">Informações (Pessoa Jurídica)</h2>
                            <div className="info-gerais-conteudo">
                                <div className="info-gerais-1">
                                    <TextField id="nome-legal" label="Nome Legal" value={nomelegal} onChange={(event) => {
                                        setNomeLegal(event.target.value);
                                    }} />
                                    <TextField id="cnpj" label="CNPJ" value={cnpj} onChange={(event) => {
                                        setCnpj(event.target.value);
                                    }} />
                                    <TextField id="inscricao-estadual" value={ie}label="Inscrição Estadual" onChange={(event) => {
                                        setIe(event.target.value);
                                    }} />
                                     <TextField id="telefone" label="Telefone" value={telefone} onChange={(event) => {
                                        setTelefone(event.target.value);
                                    }} />
                                </div>
                                <div className="info-gerais-2">
                                    <TextField id="celular" label="Celular" value={celular} onChange={(event) => {
                                        setCelular(event.target.value);
                                    }} />
                                    <TextField id="email" label="E-mail" value={email} onChange={(event) => {
                                        setEmail(event.target.value);
                                    }} />
                                    <TextField id="website" label="Website" value={website} onChange={(event) => {
                                        setWebsite(event.target.value);
                                    }} />
                                    <TextField id="empresa" label="Empresa" value={empresa} onChange={(event) => {
                                        setEmpresa(event.target.value);
                                    }} />
                                </div>
                            </div>
                        </div>
                    }

                    <div className="info-gerais">
                    <h2 className="titulo-info-gerais">Endereço</h2>
                        <div className="info-gerais-conteudo">
                            <div className="info-gerais-1">
                                <div>
                                    <TextField id="cep" label="CEP" value= {cep} onChange={(event) => {
                                        setCep(event.target.value);
                                    }} /><Search />
                                </div>

                                <TextField id="rua" label="Rua" value= {rua} onChange={(event) => {
                                    setRua(event.target.value);
                                }} />
                                <TextField id="numero" label="Número" value= {numero} onChange={(event) => {
                                    setNumero(event.target.value);
                                }} />
                                <TextField id="complemento" label="Complemento" value= {complemento} onChange={(event) => {
                                    setComplemento(event.target.value);
                                }} />
                            </div>
                            <div className="info-gerais-2">
                                <TextField id="distrito" label="Distrito" value= {distrito} onChange={(event) => {
                                    setDistrito(event.target.value);
                                }} />
                                <TextField id="cidade" label="Cidade" value= {cidade} onChange={(event) => {
                                    setCidade(event.target.value);
                                }} />
                                <TextField id="estado" label="Estado" value= {estado} onChange={(event) => {
                                    setEstado(event.target.value);
                                }} />
                                {/* <TextField id="pais" label="País" value= {pais} onChange={(event) => {
                                    setPais(event.target.value);
                                }} /> */}
                            </div>
                        </div>


                    </div>

                    <div className="info-gerais">
                        {tipoParceiro === "pessoaFisica" &&
                            <div>
                                <h2 className="titulo-info-gerais">Fiscal</h2>
                                <FormControl>
                                    <FormLabel component="legend">Perfil Fiscal</FormLabel>
                                    <RadioGroup onChange={(event) => { setPerfilFiscal(event.target.value); }} >
                                        <FormControlLabel value="contribuinte" control={<Radio />} label="Contribuinte" />
                                        <FormControlLabel value="nao-contribuinte" control={<Radio />} label="Não Contribuinte" />
                                        <FormControlLabel value="isento" control={<Radio />} label="Isento" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        }

                        {tipoParceiro === "pessoaJuridica" &&
                            <div>
                                <h2 className="titulo-info-gerais">Fiscal</h2>
                                <TextField id="inscricao-municipal" value={ie}label="Inscrição Municipal" onChange={(event) => { setIe(event.target.value); }}/>
                                <div className="perfil-taxas info-gerais-conteudo">
                                    <div>
                                        <FormControl>
                                            <FormLabel component="legend">Perfil Fiscal (Jurídico)</FormLabel>
                                            <RadioGroup value = {perfilFiscal} onChange={(event) => { setPerfilFiscal(event.target.value); }}>
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
                                            <RadioGroup value={tx} onChange={(event) => { setTx(event.target.value); }}>
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

                    <div className="botoes">
                        <Button onClick={()=> updateJuridica(id)} variant="success">Atualizar</Button>
                        <Button onClick={() => history.goBack()} variant="danger">Cancel</Button>
                    </div>

                </form>

            </section>


        </>
    );

}

export default ConsultaParceiroPessoaJuridica;
