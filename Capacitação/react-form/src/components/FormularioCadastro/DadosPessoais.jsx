import React from "react";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Switch } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { useState } from "react";
import { useContext } from "react";
import ValidacoesCadastro from "../../contexts/validacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({aoEnviar }) {
    let [nome, setNome] = useState("");
    let [sobrenome, setSobrenome] = useState("");
    let [cpf, setCpf] = useState("");
    let [promocoes, setPromocoes] = useState(true);
    let [novidades, setNovidades] = useState(true);

    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
            }
        }}>
            <TextField value={nome} id="nome" name="nome" label="Nome" variant="outlined" fullWidth margin="normal"
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.help}
            />

            <TextField value={sobrenome} id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal"
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}/>

            <TextField value={cpf} id="cpf" name="cpf" label="CPF" variant="outlined" fullWidth margin="normal"
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido} helperText={erros.cpf.help}/>

            <FormControlLabel checked={promocoes} label="Promoções" control={<Switch name="promocoes" color="primary"/>}
                onChange={(event) => {
                    setPromocoes(event.target.checked);
                }}/>
            
            <FormControlLabel checked={novidades} label="Novidades" control={<Switch name="novidades" color="primary"/>}
                onChange={(event) => {
                    setNovidades(event.target.checked);
                }}/>

            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    );
}

export default DadosPessoais;
