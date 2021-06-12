import { React, Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';

import { validarCpf, validarSenha } from './models/cadastro';
import ValidacoesCadastro from './contexts/validacoesCadastro';

function App() {
	return(
		<Container component="article" maxWidth="sm">
			<Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
			<ValidacoesCadastro.Provider value={{cpf: validarCpf, senha: validarSenha, nome: validarSenha}}>
				<FormularioCadastro aoEnviar={aoEnviar} />
			</ValidacoesCadastro.Provider>
		</Container>
	);
}

function aoEnviar(dados){
	console.log(dados);
}

export default App;
