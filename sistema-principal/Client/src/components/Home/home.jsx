// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { useRouteMatch, Route } from 'react-router';

// IMPORTAÇÃO DOS COMPONENTES
import { Container, Button } from '@material-ui/core';
import { Card } from 'react-bootstrap';
import { BorderColor, Delete } from '@material-ui/icons';
import {Assignment, Group, Assessment, Folder} from '@material-ui/icons';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import Formulario from '../template/TemplateFormulario';

function Template() {

    const { path, url } = useRouteMatch();

    console.log(url);
    console.log(path);

    return (
        <>
           
            <section class="cards-home"> 

                <div class="cards-home1">
                    <Link 
                        to="/fiscal"
                        style={{color: "black"}}
                    >
                        <div class="card-home">
                            <Assignment  style={{ fontSize: 40 }}/>
                            <h4>Fiscal</h4>
                        </div>
                    </Link>
                    <Link
                        to="/inventario"
                        style={{color: "black"}}
                    >
                        <div class="card-home">
                            <Folder  style={{ fontSize: 40 }}/>
                            <h4>Inventário</h4>
                        </div>
                    </Link>
                </div>
                <div class="cards-home2">
                    <Link
                        to="/parceiros"
                        style={{color: "black"}}
                    >
                        <div class="card-home">
                            <Group  style={{ fontSize: 40 }}/>
                            <h4>Parceiros</h4>
                        </div>
                    </Link>
                    <Link
                        to="/contabilidade"
                        style={{color: "black"}}
                    >
                        <div class="card-home">
                            <Assessment  style={{ fontSize: 40 }}/>
                            <h4>Contabilidade</h4>

                        </div>
                    </Link>
                    
                </div>

            </section>

        


            <Switch>
                <Route path="/cadastro">
                    <Formulario />
                </Route>
            </Switch>
        </>

    );

}

export default Template;