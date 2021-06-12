import React from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";
import { useState } from "react";
import { useEffect } from "react";
import { Stepper, Typography, Step, StepLabel } from "@material-ui/core";

function FormularioCadastro({ aoEnviar }) {

    let [etapaAtual, setEtapaAtual] = useState(0);
    let [dadosColetados, setDadosColetados] = useState({});

    useEffect(() => {
        if (etapaAtual === formularios.length - 1){
            aoEnviar(dadosColetados)
        }
    })

    let formularios = [<DadosUsuario aoEnviar={coletarDados} />,
                    <DadosPessoais aoEnviar={coletarDados} />,
                    <DadosEntrega aoEnviar={coletarDados} />,
                    <Typography variant="h5">Obrigado pelo cadastro!</Typography>
                ]

    function coletarDados(dados) {
        setDadosColetados({ ...dadosColetados, ...dados })
        console.log(dadosColetados);
        proximaEtapa();
    }
    
    function proximaEtapa(dados) {
        setEtapaAtual(etapaAtual + 1);
    }

    return(
        <>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]}
        </>
    );
}

export default FormularioCadastro;
