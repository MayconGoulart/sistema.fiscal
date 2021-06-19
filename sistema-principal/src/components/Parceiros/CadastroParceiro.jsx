// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React from 'react';

// IMPORTAÇÃO DOS COMPONENTES
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
import { Person, Search } from '@material-ui/icons';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './parceiros.css';

function CadastroParceiro() {

    return (
        <>

            <Container className="md container-generico">
                
                <form>
                    
                    <div>
                        <Person style={{ fontSize: 50 }}/>
                        <FormControl>
                            <RadioGroup>
                                <FormControlLabel value="fisico" control={<Radio />} label="Pessoa Física" />
                                <FormControlLabel value="juridica" control={<Radio />} label="Pessoa Jurídica" />
                            </RadioGroup>
                        </FormControl>
                        <TextField id="nome" label="Nome" />
                        <TextField id="cpf" label="CPF" />
                        <TextField id="cnpj" label="CNPJ" />
                        <TextField id="rg" label="RG" />
                    </div>

                    <div>
                        <h2>Informações (Pessoa Física)</h2>
                        <TextField id="inscricao-estadual" label="Inscrição Estadual" />
                        <TextField id="telefone" label="Telefone" />
                        <TextField id="celular" label="Celular" />
                        <TextField id="email" label="E-mail" />
                        <TextField id="website" label="Website" />
                    </div>

                    <div>
                        <h2>Informações (Pessoa Jurídica)</h2>
                        <TextField id="nome-legal" label="Nome Legal" />
                        <TextField id="telefone" label="Telefone" />
                        <TextField id="celular" label="Celular" />
                        <TextField id="email" label="E-mail" />
                        <TextField id="empresa" label="Empresa" />
                        <TextField id="website" label="Website" />
                    </div>

                    <div>
                        <h2>Endereço</h2>
                        <TextField id="cep" label="CEP" /><Search />
                        <TextField id="rua" label="Rua" />
                        <TextField id="numero" label="Número" />
                        <TextField id="complemento" label="Complemento" />
                        <TextField id="distrito" label="Distrito" />
                        <TextField id="cidade" label="Cidade" />
                        <TextField id="estado" label="Estado" />
                        <TextField id="pais" label="País" />
                    </div>

                    <div>
                        <h2>Fiscal</h2>
                        <TextField id="inscricao-municipal" label="Inscrição Municipal" />
                        <FormControl>
                            <FormLabel component="legend">Perfil Fiscal (Físico)</FormLabel>
                                <RadioGroup>
                                    <FormControlLabel value="contribuinte" control={<Radio />} label="Contribuinte" />
                                    <FormControlLabel value="nao-contribuinte" control={<Radio />} label="Não Contribuinte" />
                                    <FormControlLabel value="isento" control={<Radio />} label="Isento" />
                                </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel component="legend">Perfil Fiscal (Jurídico)</FormLabel>
                                <RadioGroup>
                                    <FormControlLabel value="contribuinte-sn" control={<Radio />} label="Contribuinte Simples Nacional" />
                                    <FormControlLabel value="nao-contribuinte-sn" control={<Radio />} label="Simples Nacional Não Contribuinte" />
                                    <FormControlLabel value="isento-sn" control={<Radio />} label="Simples Nacional Isento" />
                                    <FormControlLabel value="contribuinte" control={<Radio />} label="Contribuinte" />
                                    <FormControlLabel value="nao-contribuinte" control={<Radio />} label="Não Contribuinte" />
                                    <FormControlLabel value="isento" control={<Radio />} label="Isento" />
                                </RadioGroup>
                        </FormControl>
                        <FormControl>
                            <FormLabel component="legend">Tax Framework</FormLabel>
                                <RadioGroup>
                                    <FormControlLabel value="simples-nacional" control={<Radio />} label="Simples Nacional" />
                                    <FormControlLabel value="lucro-real" control={<Radio />} label="Lucro Real" />
                                    <FormControlLabel value="lucro-presumido" control={<Radio />} label="Lucro Presumido" />
                                </RadioGroup>
                        </FormControl>
                    </div>

                    <div>
                        <Button variant="success">Salvar</Button>
                        <Button variant="danger">Cancelar</Button>
                    </div>

                </form>
                
            </Container>


        </>
    );

}

export default CadastroParceiro;
