import React from "react";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Switch } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { useState } from "react";

function FormularioCadastro({onSubmit, validarCpf}) {
    let [nome, setNome] = useState("");
    let [sobrenome, setSobrenome] = useState("");
    let [cpf, setCpf] = useState("");
    let [promocoes, setPromocoes] = useState(true);
    let [novidades, setNovidades] = useState(true);

    let [erro, setErroCpf] = useState({cpf: {valido: true, help: ""}});

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            onSubmit({nome, sobrenome, cpf, novidades, promocoes});
        }}>
            <TextField value={nome} id="nome" label="Nome" variant="outlined" fullWidth margin="normal"
                onChange={(event) => {
                    setNome(event.target.value);
                }}/>

            <TextField value={sobrenome} id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal"
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}/>

            <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal"
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
                onBlur={(event) => {
                    let ehValido = validarCpf(cpf);
                    setErroCpf({cpf: ehValido})
                }}
                error={!erro.cpf.valido} helperText={erro.cpf.help}/>

            <FormControlLabel checked={promocoes} label="Promoções" control={<Switch name="promocoes" color="primary"/>}
                onChange={(event) => {
                    setPromocoes(event.target.checked);
                }}/>
            
            <FormControlLabel checked={novidades} label="Novidades" control={<Switch name="novidades" color="primary"/>}
                onChange={(event) => {
                    setNovidades(event.target.checked);
                }}/>

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;
