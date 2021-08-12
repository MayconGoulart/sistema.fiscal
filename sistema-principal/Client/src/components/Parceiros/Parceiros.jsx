// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React, { useState, useEffect } from 'react';
import { Link, Switch } from 'react-router-dom';
import { useRouteMatch, Route } from 'react-router';

// IMPORTAÇÃO DOS COMPONENTES
import { Container, Button } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import { BorderColor, Delete } from '@material-ui/icons';
import ConsultaParceiroPessoaFisica from './ConsultaParceiroPessoaFisica';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './parceiros.css';
import Swal from 'sweetalert2'

import Axios from "axios";

function Parceiros() {

    const { path, url } = useRouteMatch();
    const [pessoaFisica, setPessoaFisica] = useState([])
    const [pessoaJuridica, setPessoaJuridica] = useState([])

    // pessoa fisica
    useEffect(async () => {

        async function fetchData() {
            const response = await fetch("http://localhost:3001/pessoaFisica");
            const data = await response.json();

            setPessoaFisica(data);

            const response2 = await fetch("http://localhost:3001/pessoaJuridica");
            const data2 = await response2.json();

            setPessoaJuridica(data2);
        }
        fetchData();

    }, []);


    console.log(pessoaFisica);

    const deleteJuridica = async (id) => {
        try {

            Axios.delete(`http://localhost:3001/deletePJuridica/${id}`);
  
            Swal.fire({
                icon: 'success',
                title: 'Exclusão pessoa Jurídica',
                text: 'Exclusão realizada com sucesso!'
            });

            const response2 = await fetch("http://localhost:3001/pessoaJuridica");
            const data2 = await response2.json();

            setPessoaJuridica(data2);
            

        } catch (error) {
              
            Swal.fire({
                icon: 'error',
                title: 'Exclusão pessoa Jurídica',
                text: 'Não foi possível realizar a Exclusão!'
            });

           
        }
    };

    const deleteFisica = async (id) => {

        try {

            Axios.delete(`http://localhost:3001/deletePFisica/${id}`);
  
            Swal.fire({
                icon: 'success',
                title: 'Exclusão pessoa Física',
                text: 'Exclusão realizada com sucesso!'
            });

            const response = await fetch("http://localhost:3001/pessoaFisica");
            const data = await response.json();

            setPessoaFisica(data);

        } catch (error) {
              
            Swal.fire({
                icon: 'error',
                title: 'Exclusão pessoa Física',
                text: 'Não foi possível realizar a Exclusão!' 
            });
        }
    };

    return (

        <>
            <Container maxWidth="md" className="container-generico">
                <div className="container-fluid d-flex flex-wrap div-generico">
                    {pessoaFisica.map(response => (
                        <Card key={response._id} style={{ width: '17rem' }} className="card-generico">
                            <Card.Body>
                                <Card.Title>Pessoa Física - {response.Nome}</Card.Title>
                                <Card.Subtitle></Card.Subtitle>
                                <Card.Text>
                                    {response.Estado} - {response.Cidade}
                                </Card.Text>
                                <footer>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Button variant="contained" color="primary">
                                                <Link to={{ pathname: "consultaParceiroPessoaFisica/" + response._id }}>editar</Link>
                                            </Button>
                                        </div>
                                        <div className="col-md-6">
                                            <Button onClick={() => deleteFisica(response._id)} variant="contained" color="secondary">
                                                <Link>Deletar</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </footer>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>


            <Container maxWidth="md" className="container-generico">
                <div className="container-fluid d-flex flex-wrap div-generico">
                    {pessoaJuridica.map(response => (
                        <Card key={response._id} style={{ width: '17rem' }} className="card-generico">
                            <Card.Body>
                                <Card.Title>Pessoa Jurídica - {response.Nome}</Card.Title>
                                <Card.Subtitle></Card.Subtitle>
                                <Card.Text>
                                    {response.Estado} - {response.Cidade}
                                </Card.Text>
                                <footer>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Button variant="contained" color="primary">
                                                <Link to={{ pathname: "consultaParceiroPessoaJuridica/" + response._id }}>editar</Link>
                                            </Button>
                                        </div>
                                        <div className="col-md-6">
                                            <Button onClick={() => deleteJuridica(response._id)} variant="contained" color="secondary">
                                                <Link>Deletar</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </footer>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </Container>

            <div className="botoes">
                <Button variant="contained" color="primary">
                    <Link to="cadastroParceiro">Novo Registro</Link>
                </Button>
            </div>

        </>

    );

}

export default Parceiros;