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
import Swal from 'sweetalert2'

import Axios from "axios";

function ConsultaParceiroPessoaFisica() {

    const history = useHistory();

    let { id } = useParams();
    const [tipoParceiro, setTipoParceiro] = useState("pessoaFisica");

    //ambos
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [celular, setCelular] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [perfilFiscal, setPerfilFiscal] = useState("");


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



    useEffect(async () => {
        async function fetchData() {
            const response = await fetch("http://localhost:3001/pessoaFisica");
            const dadosRetorno = await response.json();

            dadosRetorno.forEach(element => {

                if (element._id == id) {

                    console.log(element)
                    setNome(element.Nome)
                    setTelefone(element.Telefone)
                    setCelular(element.Celular)
                    setEmail(element.Email)
                    setWebsite(element.WebSite)
                    setPerfilFiscal(element.PerfilFiscal)

                    setCpf(element.CPF);
                    setRg(element.rg);
                    setCargo(element.Cargo);
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
        }
        fetchData()

    }, []);

    const updateFisica = (id) => {
        Axios.put("http://localhost:3001/updatePFisica", {
            id: id,
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
        }).then(data => {

            console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'Atualização pessoa Física',
                text: 'Atualização realizada com sucesso!'
            });

            history.goBack();
        })
            .catch(function (error) {

                // Request made and server responded
                Swal.fire({
                    icon: 'error',
                    title: 'Atualização pessoa Física',
                    text: 'Não foi possível realizar a Atualização!' + error
                });
            });

    };

    return (
        <>
            <section className="infos-card">

                <form>
                    {/* //</form><form onSubmit={handleSubmit}> */}

                    <div className="info-inicial">
                        <div className="icon-inicial">
                            <Person style={{ fontSize: 80 }} />
                        </div>

                        <div>
                            <TextField id="nome" label="Nome" value={nome} onChange={(event) => {
                                setNome(event.target.value);
                            }} />
                        </div>
                    </div>

                    {tipoParceiro === "pessoaFisica" &&

                        <div className="info-gerais">
                            <h2 className="titulo-info-gerais">Informações (Pessoa Física)</h2>
                            <div className="info-gerais-conteudo">
                                <div className="info-gerais-1">
                                    <TextField id="cpf" label="CPF" value={cpf} onChange={(event) => {
                                        setCpf(event.target.value);
                                    }} />
                                    <TextField id="rg" label="RG" value={rg} onChange={(event) => {
                                        setRg(event.target.value);
                                    }} />
                                    <TextField id="cargo" label="Cargo" value={cargo} onChange={(event) => {
                                        setCargo(event.target.value);
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
                                    <TextField id="cep" label="CEP" value={cep} onChange={(event) => {
                                        setCep(event.target.value);
                                    }} /><Search />
                                </div>

                                <TextField id="rua" label="Rua" value={rua} onChange={(event) => {
                                    setRua(event.target.value);
                                }} />
                                <TextField id="numero" label="Número" value={numero} onChange={(event) => {
                                    setNumero(event.target.value);
                                }} />
                                <TextField id="complemento" label="Complemento" value={complemento} onChange={(event) => {
                                    setComplemento(event.target.value);
                                }} />
                            </div>
                            <div className="info-gerais-2">
                                <TextField id="distrito" label="Distrito" value={distrito} onChange={(event) => {
                                    setDistrito(event.target.value);
                                }} />
                                <TextField id="cidade" label="Cidade" value={cidade} onChange={(event) => {
                                    setCidade(event.target.value);
                                }} />
                                <TextField id="estado" label="Estado" value={estado} onChange={(event) => {
                                    setEstado(event.target.value);
                                }} />
                                <TextField id="pais" label="País" value={pais} onChange={(event) => {
                                    setPais(event.target.value);
                                }} />
                            </div>
                        </div>


                    </div>

                    <div className="info-gerais">
                        {tipoParceiro === "pessoaFisica" &&
                            <div>
                                <h2 className="titulo-info-gerais">Fiscal</h2>
                                <FormControl>
                                    <FormLabel component="legend">Perfil Fiscal</FormLabel>
                                    <RadioGroup value={perfilFiscal} onChange={(event) => { setPerfilFiscal(event.target.value); }} >
                                        <FormControlLabel value="contribuinte" control={<Radio />} label="Contribuinte" />
                                        <FormControlLabel value="nao-contribuinte" control={<Radio />} label="Não Contribuinte" />
                                        <FormControlLabel value="isento" control={<Radio />} label="Isento" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        }

                    </div>

                    <div className="botoes">
                        <Button onClick={() => updateFisica(id)} variant="success">Atualizar</Button>
                        <Button onClick={() => history.goBack()} variant="danger">Cancel</Button>
                    </div>

                </form>

            </section>

        </>
    );

}

export default ConsultaParceiroPessoaFisica;
