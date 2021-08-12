// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React, { useState, useEffect } from 'react';
import { Link, Switch } from 'react-router-dom';
import { useRouteMatch, Route } from 'react-router';
import { useHistory } from 'react-router-dom';

// IMPORTAÇÃO DOS COMPONENTES
import { Container, Button } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import { BorderColor, Delete } from '@material-ui/icons';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './inventario.css';
import CadastroInventario from './CadastroInventario';
import Swal from 'sweetalert2'
import Axios from "axios";

function Template() {

    const history = useHistory();

    const { path, url } = useRouteMatch();

    const [inventarioProduto, setInventarioProduto] = useState([])
    const [inventarioServico, setInventarioServico] = useState([])

    //produtos
    useEffect(async () => {

        const response = await fetch("http://localhost:3001/inventarioProduto");
        const data = await response.json();

        setInventarioProduto(data);

        const response2 = await fetch("http://localhost:3001/inventarioServico");
        const data2 = await response2.json();

        setInventarioServico(data2);

    }, []);


    const atualizaProdutos = async () => {

        const response2 = await fetch("http://localhost:3001/inventarioProduto");
        const data2 = await response2.json();

        setInventarioProduto(data2);

    }

    const atualizaServicos = async () => {

        const response2 = await fetch("http://localhost:3001/inventarioServico");
        const data2 = await response2.json();

        setInventarioServico(data2);

    }


    const deleteProduto = async (id) => {

        Swal.fire({
            title: 'Deseja realmente deletar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar!'
        }).then((result) => {
            if (result.isConfirmed) {

                Axios.delete(`http://localhost:3001/deleteIProduto/${id}`).then(data => {

                    console.log(data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Remoção produtos',
                        text: 'Remoção realizada com sucesso!'
                    });

                    atualizaProdutos();

                })
                    .catch(function (error) {

                        // Request made and server responded
                        Swal.fire({
                            icon: 'error',
                            title: 'Remoção produtos',
                            text: 'Não foi possível realizar a Remoção!' + error
                        });
                    });
            }
        })
    };

    const deleteServico = async (id) => {

        Swal.fire({
            title: 'Deseja realmente deletar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, deletar!'
        }).then((result) => {
            if (result.isConfirmed) {

                Axios.delete(`http://localhost:3001/deleteIServico/${id}`).then(data => {

                    console.log(data);
                    Swal.fire({
                        icon: 'success',
                        title: 'Remoção Serviços',
                        text: 'Remoção realizada com sucesso!'
                    });

                    atualizaServicos();

                })
                    .catch(function (error) {

                        // Request made and server responded
                        Swal.fire({
                            icon: 'error',
                            title: 'Remoção Serviços',
                            text: 'Não foi possível realizar a Remoção!' + error
                        });
                    });

            }
        })
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
                                                <Link to={{ pathname: "consultaInventario/" + response._id + "/produto"} }>editar</Link>
                                            </Button>
                                        </div>
                                        <div className="col-md-6">
                                            <Button onClick={() => deleteProduto(response._id)} variant="contained" color="secondary">
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
                                                <Link to={{ pathname: "consultaInventario/" + response._id + "/servico"} }>editar</Link>
                                            </Button>
                                        </div>
                                        <div className="col-md-6">
                                            <Button onClick={() => deleteServico(response._id)} variant="contained" color="secondary">
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