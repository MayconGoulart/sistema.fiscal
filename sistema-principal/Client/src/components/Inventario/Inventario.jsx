// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React, { useState, useEffect } from 'react';
import { Link, Switch } from 'react-router-dom';
import { useRouteMatch, Route } from 'react-router';

// IMPORTAÇÃO DOS COMPONENTES
import { Container, Button } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import { BorderColor, Delete } from '@material-ui/icons';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './inventario.css';
import CadastroInventario from './CadastroInventario';

import Axios from "axios";

function Template() {

    const { path, url } = useRouteMatch();

    const [inventarioProduto, setInventarioProduto] = useState([])
    const [inventarioServico, setInventarioServico] = useState([])

    //produtos
    useEffect(async () => {

        const response = await fetch("http://localhost:3001/inventarioProduto");
        const data = await response.json();

        setInventarioProduto(data);
    }, []);

    //serviços
    useEffect(async () => {

        const response = await fetch("http://localhost:3001/inventarioServico");
        const data = await response.json();

        setInventarioServico(data);
    }, []);

    const deleteProduto = (id) => {
        Axios.delete(`http://localhost:3001/deleteIProduto/${id}`);
    };

    const deleteServico = (id) => {
        Axios.delete(`http://localhost:3001/deleteIServico/${id}`);
    };

    return (
        <>

            <Container maxWidth="md" className="container-generico">

                <div className="container-fluid d-flex flex-wrap div-generico">
                    {inventarioProduto.map(response => (
                        <Card key={response._id} style={{ width: '17rem' }} className="card-generico">
                            <Card.Body>
                                <Card.Title>Produto - {response.Nome}</Card.Title>
                                <Card.Subtitle>{response.Categoria}</Card.Subtitle>
                                <Card.Text>
                                    Custo compra: {response.CustoCommpra} <br />
                                    Preço venda: {response.PrecoVenda}
                                </Card.Text>
                                <footer>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Button variant="contained" color="primary">
                                                <Link>Editar</Link>
                                            </Button>
                                        </div>
                                        <div className="col-md-6">
                                            <Button onClick={()=> deleteProduto(response._id)} variant="contained" color="secondary">
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
                    {inventarioServico.map(response => (
                        <Card key={response._id} style={{ width: '17rem' }} className="card-generico">
                            <Card.Body>
                                <Card.Title>Serviço - {response.Nome}</Card.Title>
                                <Card.Subtitle>{response.Categoria}</Card.Subtitle>
                                <Card.Text>
                                    Custo compra: {response.CustoCommpra} <br />
                                    Preço venda: {response.PrecoVenda}
                                </Card.Text>
                                <footer>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Button variant="contained" color="primary">
                                                <Link>Editar</Link>
                                            </Button>
                                        </div>
                                        <div className="col-md-6">
                                            <Button onClick={()=> deleteServico(response._id)} variant="contained" color="secondary">
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
                    <Link to="/cadastroInventario">Novo Registro</Link>
                </Button>
            </div>

            <Switch>
                <Route path={`/cadastroInventario`}>
                    <CadastroInventario />
                </Route>
            </Switch>
        </>

    );

}

export default Template;