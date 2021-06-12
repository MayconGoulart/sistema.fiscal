import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import ValidacoesCadastro from '../../contexts/validacoesCadastro';
import { useContext } from 'react';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {

    let [email, setEmail] = useState("");
    let [senha, setSenha] = useState("");

    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()) {
                aoEnviar({email, senha});
            }
        }}>
            <TextField value={email} name="email" id="email" label='E-mail' type='email' fullWidth variant="outlined" margin="normal" required
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            />
            <TextField value={senha} name="senha" id="senha" label="Senha" type="password" fullWidth variant="outlined" margin="normal" required
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.help}
            />
            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    );
}

export default DadosUsuario;