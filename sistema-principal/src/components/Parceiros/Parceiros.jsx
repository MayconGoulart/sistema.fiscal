// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { useRouteMatch, Route } from 'react-router';

// IMPORTAÇÃO DOS COMPONENTES
import { Container, Button } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import { BorderColor, Delete } from '@material-ui/icons';
import Formulario from '../template/TemplateFormulario';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './parceiros.css';

function Parceiros() {

    const { path, url } = useRouteMatch();

    console.log(url);
    console.log(path);

    return (

        <>

            <div className="botoes">
                <Button variant="contained" color="primary">
                    <Link to="cadastroParceiro">Novo Registro</Link>
                </Button>
            </div>


            <Container maxWidth="md" className="container-generico">

                <div className="container-fluid d-flex flex-wrap div-generico">
                    <Card style={{ width: '18rem'}} className="card-generico">
                        <Card.Body>
                            <Card.Title>Título do Card</Card.Title>
                            <Card.Subtitle>Subtítulo (Não necessário)</Card.Subtitle>
                            <Card.Text>
                                Aqui irão algumas informações básicas.
                            </Card.Text>
                            <footer>
                                <BorderColor />
                                <Delete />
                            </footer>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem'}} className="card-generico">
                        <Card.Body>
                            <Card.Title>Título do Card</Card.Title>
                            <Card.Subtitle>Subtítulo (Não necessário)</Card.Subtitle>
                            <Card.Text>
                                Aqui irão algumas informações básicas.
                            </Card.Text>
                            <footer>
                                <BorderColor />
                                <Delete />
                            </footer>
                        </Card.Body>
                    </Card>
                </div>

                <div className="container-fluid d-flex flex-wrap">
                    <Card style={{ width: '18rem'}} className="card-generico">
                        <Card.Body>
                            <Card.Title>Título do Card</Card.Title>
                            <Card.Subtitle>Subtítulo (Não necessário)</Card.Subtitle>
                            <Card.Text>
                                Aqui irão algumas informações básicas.
                            </Card.Text>
                            <footer>
                                <BorderColor />
                                <Delete />
                            </footer>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem'}} className="card-generico">
                        <Card.Body>
                            <Card.Title>Título do Card</Card.Title>
                            <Card.Subtitle>Subtítulo (Não necessário)</Card.Subtitle>
                            <Card.Text>
                                Aqui irão algumas informações básicas.
                            </Card.Text>
                            <footer>
                                <BorderColor />
                                <Delete />
                            </footer>
                        </Card.Body>
                    </Card>
                </div>

            </Container>

            <Switch>
                <Route path={`/cadastroParceiro`}>
                    <Formulario />
                </Route>
            </Switch>
        </>
    );

}

export default Parceiros;