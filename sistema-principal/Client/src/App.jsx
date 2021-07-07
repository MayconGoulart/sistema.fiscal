// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// IMPORTAÇÃO DOS COMPONENTES\
import Cabecalho from './components/Principal/Cabecalho';
import Page404 from './components/Principal/Page404';
import Parceiros from './components/Parceiros/Parceiros';
import Template from './components/template/Template';
import Formulario from './components/template/TemplateFormulario';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import CadastroPessoaFisica from './components/Parceiros/CadastroParceiro';

function App() {

    return (

        <>
            <Cabecalho />
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Template />
                    </Route>
                    <Route path="/parceiros">
                        <Parceiros />
                    </Route>

                    <Route path="/cadastroParceiro">
                        <CadastroPessoaFisica />
                    </Route>

                    <Route path="/cadastro">
                        <Formulario />
                    </Route>

                    <Route>
                        <Page404 />
                    </Route>
                </Switch>
            </Router>
        </>
        

    );

}

export default App;
