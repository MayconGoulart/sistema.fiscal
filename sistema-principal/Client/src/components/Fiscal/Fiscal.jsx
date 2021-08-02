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
import './fiscal.css';
import CadastroFiscal from './CadastroFiscal';

function Fiscal() {

    const { path, url } = useRouteMatch();

    console.log(url);
    console.log(path);

    const [notaFiscal, setNotaFiscal] = useState([])

    // pessoa fisica
    useEffect(async () => {

        const response = await fetch("http://localhost:3001/notaFiscal");
        const data = await response.json();

        setNotaFiscal(data);

    }, []);

    return (
        <>

            <section maxWidth="md" className="container-generico">

                <Container maxWidth="md" className="container-generico">
                    <div className="container-fluid d-flex flex-wrap div-generico">
                        {notaFiscal.map(response => (
                            <Card key={response._id} style={{ width: '17rem' }} className="card-generico">
                                <Card.Body>
                                    <Card.Title>Nota - {response.Operacao}</Card.Title>
                                    <Card.Subtitle>{response.Finalidade}</Card.Subtitle>
                                    <Card.Text>
                                        {response.ConsumidorFinal} - {response.TipoDocumento}
                                    </Card.Text>
                                    <footer>
                                        <div className="row">
                                            {/* <div className="col-md-6">
                                                <Button variant="contained" color="primary">
                                                    <Link>Editar</Link>
                                                </Button>
                                            </div>
                                            <div className="col-md-6">
                                                <Button variant="contained" color="secondary">
                                                    <Link>Deletar</Link>
                                                </Button>
                                            </div> */}
                                        </div>
                                    </footer>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>

            </section>

            <div className="botoes">
                <Button variant="contained">
                    <Link to="/cadastroFiscal">Novo Registro</Link>
                </Button>
            </div>


            <Switch>
                <Route path="/cadastroFiscal">
                    <CadastroFiscal />
                </Route>
            </Switch>
        </>

    );

}

export default Fiscal;