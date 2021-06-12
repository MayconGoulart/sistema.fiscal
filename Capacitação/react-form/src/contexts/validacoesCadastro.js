import React from 'react';
import { validarCpf, validarSenha } from '../models/cadastro';

const ValidacoesCadastro = React.createContext(
    {
        cpf: validarCpf,
        senha: validarSenha,
        nome: validarSenha
    }
);

export default ValidacoesCadastro;