import { React, Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container } from '@material-ui/core';
import { Typography } from '@material-ui/core';

class App extends Component {
	render() {
		return(
			<Container component="article" maxWidth="sm">
				<Typography variant="h3" component="h1" align="center">
					Formulário de Cadastro
				</Typography>
				<FormularioCadastro onSubmit={onSubmit} validarCpf={validarCpf} />
			</Container>
		);
	}
}

function onSubmit(dados){
	console.log(dados);
}

function validarCpf(cpf) {
	if (cpf.length === 11){
		return {valido: true, help: ""}
	} else {
		return {valido: false, help: "CPF deve ter 11 digitos."}
	}
}

export default App;
