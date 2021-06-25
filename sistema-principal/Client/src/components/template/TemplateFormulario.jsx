// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React from 'react';

// IMPORTAÇÃO DOS COMPONENTES
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
import { Person } from '@material-ui/icons';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './template.css';

function Formulario() {

    return (
        <>

            <Container className="md container-generico">
                
                <form>

                    <div>
                        <Button variant="success">Salvar</Button>
                        <Button variant="danger">Cancelar</Button>
                    </div>

                </form>
                
            </Container>


        </>
    );

}

export default Formulario;
