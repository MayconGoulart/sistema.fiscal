// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React from 'react';

// IMPOPRTAÇÃO DOS COMPONENTES
import { Nav, Navbar } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';


function Cabecalho(){

    return (

        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand herf="#home">Auto Peças Goulart</Navbar.Brand>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/parceiros">Parceiros</Nav.Link>
                <Nav.Link href="/inventario">Inventário</Nav.Link>
                <Nav.Link href="/fiscal">Fiscal</Nav.Link>
                <Nav.Link href="/contabilidade">Contabilidade</Nav.Link>
                <Nav.Link href="/configuracoes">Configurações</Nav.Link>
                <Avatar alt="Remy Sharp" src="">G4</Avatar>
            </Navbar>
        </div>
        
    );

}

export default Cabecalho;