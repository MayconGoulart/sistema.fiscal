// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import useInput from 'use-input-hook';

// IMPORTAÇÃO DOS COMPONENTES
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
import { Person, Search } from '@material-ui/icons';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './parceiros.css';

import Axios from "axios";


function ConsultaParceiro() {

    // const [data] = useState({ pessoaFisica: "pessoaFisica", pessoaJuridica: "pessoaJuridica" });
    // const [tipoParceiro, setTipoParceiro] = useInput("");

    let { id } = useParams();

    //pessoa juridica
    useEffect(async () => {

        const response = await fetch("http://localhost:3001/pessoaFisicaPorId/:"+ id);
        const data = await response.json();
        console.log(data);

    }, []);

  

    return (
        <>
            <h1>ID: {id}</h1>
        </>
    );

}

export default ConsultaParceiro;
