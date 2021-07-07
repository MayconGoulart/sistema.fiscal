// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React, { useState } from 'react';
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
    const [pessoaFisica, setPessoaFisica] = useState([

        { id: 1, nome: "Carlos Pereira", cidade: "São Paulo", estado: "São Paulo", pais: "Brasil" },
        { id: 1, nome: "Ana carolina", cidade: "Paraisópolis", estado: "Minas Gerais", pais: "Brasil" },
        { id: 1, nome: "Rodrigo Souza", cidade: "Porto Alegre", estado: "Rio Grande do Sul", pais: "Brasil" },
        { id: 1, nome: "Jhon Steven", cidade: "Miami", estado: "Flórida", pais: "USA" },
        { id: 1, nome: "Maria aparecida", cidade: "São Paulo", estado: "São Paulo", pais: "Brasil" }

    ])
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
                <div  className="container-fluid d-flex flex-wrap div-generico">
                    {pessoaFisica.map(response => (
                        <Card key={response.id} style={{ width: '13rem' }} className="card-generico">
                            <Card.Body>
                                <Card.Title>Pessoa Física - {response.nome}</Card.Title>
                                <Card.Subtitle>{response.pais}</Card.Subtitle>
                                <Card.Text>
                                    {response.estado} - {response.cidade}
                                </Card.Text>
                                <footer>
                                    <BorderColor />
                                    <Delete />
                                </footer>
                            </Card.Body>
                        </Card>
                    ))}
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