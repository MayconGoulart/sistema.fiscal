import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useState } from 'react';

function DadosEntrega({ aoEnviar }) {

    let [cep, setCep] = useState("");
    let [endereco, setEndereco] = useState("");
    let [numero, setNumero] = useState("");
    let [estado, setEstado] = useState("");
    let [cidade, setCidade] = useState("");

    return (
        <form onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({cep, endereco, numero, estado, cidade});
        }}>
            <TextField value={cep} id="cep" label='CEP' type='number' variant="outlined" margin="normal"
                onChange={(event) => {
                    setCep(event.target.value);
                }}
            />

            <TextField value={endereco} id="endereco" label='Endereço' type='text' fullWidth variant="outlined" margin="normal"
                onChange={(event) => {
                    setEndereco(event.target.value);
                }}
            />

            <TextField value={numero} id="numero" label='Número' type='number' variant="outlined" margin="normal"
                onChange={(event) => {
                    setNumero(event.target.value);
                }}
            />

            <TextField value={estado} id="estado" label='Estado' type='text' variant="outlined" margin="normal"
                onChange={(event) => {
                    setEstado(event.target.value);
                }}
            />

            <TextField value={cidade} id="cidade" label='Cidade' type='number' variant="outlined" margin="normal"
                onChange={(event) => {
                    setCidade(event.target.value);
                }}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastrar</Button>
        </form>
    );
}

export default DadosEntrega;