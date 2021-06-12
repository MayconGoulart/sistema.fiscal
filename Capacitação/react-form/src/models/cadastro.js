function validarCpf(cpf) {
	if (cpf.length === 11){
		return {valido: true, help: ""}
	} else {
		return {valido: false, help: "CPF deve ter 11 digitos."}
	}
}

function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 72) {
        return { valido: false, help: "Senha deve ter entre 4 e 72 digitos." };
    } else {
        return { valido: true, help: "" }
    }
}

export {validarCpf, validarSenha}