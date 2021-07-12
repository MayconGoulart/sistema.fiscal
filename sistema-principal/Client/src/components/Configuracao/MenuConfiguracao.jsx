// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React from 'react';

// IMPORTAÇÃO DOS COMPONENTES
import { Container, FormControl, TextField, Select, MenuItem, InputLabel } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { Person, Search } from '@material-ui/icons'

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './configuracao.css';

function Formulario() {

    return (
        <>

            <Container className="md container-generico">
                
                <form>

                    <div className="info-inicial">
                        <div class="icon-inicial">
                             <Person style={{ fontSize: 80 }} />
                        </div>

                        <div>
                            <div>
                                <TextField label="Nome da Companhia" />
                            </div>
                        </div>
                    </div>

                    <div className="info-gerais">
                        <h2 className="titulo-info-gerais">Informações Gerais</h2>
                        <div className="info-gerais-conteduo">
                            <div className="info-gerais-1">
                                <TextField label="Nome Legal" />
                                <TextField label="CNPJ" />
                                <TextField label="Inscrição Estadual" />
                                <TextField label="Inscrição Municipal" />
                                <TextField label="Telefone" />
                            </div>
                            <div className="info-gerais-2">
                                <TextField label="Celular"/>
                                <TextField label="E-mail" />
                                <TextField label="Website" />
                            </div>
                        </div>
                    </div>

                    <div className="ingo-gerais">
                        <h2 className="titulo-info-gerais">Endereço</h2>
                        <div class="info-gerais-conteudo">
                            <div className="info-gerais-1">
                                <TextField label="CEP" /><Search />
                                <TextField label="Rua" />
                                <TextField label="Número" />
                                <TextField label="Complemento" />
                            </div>
                            <div className="info-gerais-2">
                                <TextField label="Distrito" />
                                <TextField label="Cidade" />
                                <TextField label="Estado" />
                                <TextField label="País" />
                            </div>
                        </div>
                    </div>

                    <div className="info-gerais">
                        <h2 className="titulo-info-gerais">Informações Fiscais</h2>
                        <div>
                            <FormControl>
                                <InputLabel id="quadro-fiscal-empresa">Quadro Fiscal</InputLabel>
                                <Select id="quadro-fiscal-empresa">
                                    <MenuItem value={"simples-nacional"}>Simples Nacional</MenuItem>
                                    <MenuItem value={"simples-nacional-excecao"}>Simples Nacional - excesso de sublimite da receita bruta</MenuItem>
                                    <MenuItem value={"normal"}>Regime Normal</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <h3 className="titulo-info-gerais">Regime Normal</h3>
                            <div>
                                <FormControl>
                                    <InputLabel id="regime-normal">Cálculo de Lucro </InputLabel>
                                    <Select  labelId="regime-normal" >
                                        <MenuItem value={"presumido"}>Lucro Presumido</MenuItem>
                                        <MenuItem value={"real"}>Lucro Real</MenuItem>
                                        <MenuItem value={"arbitrario"}>Lucro Arbitrário</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>

                        <div>
                            <h3 className="titulo-info-gerais">Simples Nacional</h3>
                            <div>
                                <TextField label="Renda Anual" />
                                <FormControl>
                                    <InputLabel id="anexos-simples-nacional">Imposto Simplificado</InputLabel>
                                    <Select  labelId="anexos-simples-nacional" >
                                        <MenuItem value={"anexo1"}>Anexo 1 - Comércio</MenuItem>
                                        <MenuItem value={"anexo2"}>Anexo 2 - Indústria</MenuItem>
                                        <MenuItem value={"anexo3"}>Anexo 3 - Prestadores de Serviço I</MenuItem>
                                        <MenuItem value={"anexo4"}>Anexo 4 - Prestadores de Serviço II</MenuItem>
                                        <MenuItem value={"anexo5"}>Anexo 5 - Prestadores de Serviço III</MenuItem>
                                    </Select>
                                </FormControl>
                                {/* Faixa de Imposto Simplificado é definido de acordo com a renda bruta anual da empresa */}
                                <TextField label="Faixa de Imposto Simplificado" />
                                {/* PERCENTAGEM = [(RENDA BRUTA ANUAL * ALIQUOTA FAIXA ANEXO) - PARCELA A DEDUZIR ANEXO] / RENDA BRUTA ANUAL */}
                                <TextField label="Percentagem de Imposto Simplificado" />
                            </div>
                        </div>
                    </div>

                    <div className="info-gerais">
                        <h2 className="titulo-info-gerais">Impostos</h2>

                        <div>
                            <h3 className="titulo-info-gerais">PIS/COFINS</h3>
                            <FormControl>
                                <InputLabel id="pis-cofins">PIS/COFINS</InputLabel>
                                <Select id="pis-cofins">
                                    <MenuItem value={"pis-cofins-simples-nacional"}>Simples Nacional</MenuItem>
                                    <MenuItem value={"pis-065-cofins-300"}>Regime de Incidência Cumulativa PIS 0,65% e COFINS 3,00%</MenuItem>
                                    <MenuItem value={"pis-165-cofins-760"}>Regime de Incidência Cumulativa PIS 1,65% e COFINS 7,60%</MenuItem>
                                    <MenuItem value={"pis-cofins-diferenciado"}>Regime de Incidência Diferenciada</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <h3 className="titulo-info-gerais">IPI</h3>
                            <FormControl>
                                <InputLabel id="ipi">IPI</InputLabel>
                                <Select id="ipi">
                                    <MenuItem value={"ipi-simples-nacional"}>IPI Outros</MenuItem>
                                    <MenuItem value={"ipi-nao-tributado"}>IPI NT</MenuItem>
                                    <MenuItem value={"ipi-insento"}>IPI Isento</MenuItem>
                                    <MenuItem value={"ipi-10"}>IPI 10%</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <h3 className="titulo-info-gerais">ICMS</h3>
                            <FormControl>
                                <InputLabel id="icms">ICMS</InputLabel>
                                <Select id="icms">
                                    <MenuItem value={"icms-101"}>ICMS SN com Permissão de Crédito</MenuItem>
                                    <MenuItem value={"icms-102"}>ICMS SN sem Permissão de Crédito</MenuItem>
                                    <MenuItem value={"icms-103"}>ICMS SN Isento para a Faixa de Receita Bruta</MenuItem>
                                    <MenuItem value={"icms-201"}>ICMS SN com Permissão de Crédito e Cobrança do ICMS por ST</MenuItem>
                                    <MenuItem value={"icms-202"}>ICMS SN sem Permissão de Crédito e Cobrança do ICMS por ST</MenuItem>
                                    <MenuItem value={"icms-203"}>ICMS SN Isento para a Faixa de Receita Bruta e Cobrança do ICMS por ST</MenuItem>
                                    <MenuItem value={"icms-300"}>ICMS SN Imune</MenuItem>
                                    <MenuItem value={"icms-400"}>ICMS SN Não Tributado</MenuItem>
                                    <MenuItem value={"icms-500"}>ICMS SN Cobrado Anteriormente por ST ou por Antecipação</MenuItem>
                                    <MenuItem value={"icms-900"}>ICMS SN Outros</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <h3 className="titulo-info-gerais">ISSQN</h3>
                            <FormControl>
                                <InputLabel id="issqn">ISSQN</InputLabel>
                                <Select id="issqn">
                                    <MenuItem value={"issqn-00"}>ISSQN 0%</MenuItem>
                                    <MenuItem value={"issqn-10"}>ISSQN 10%</MenuItem>
                                    <MenuItem value={"issqn-nt"}>ISSQN NT</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <h3 className="titulo-info-gerais">CSLL</h3>
                            <FormControl>
                                <InputLabel id="csll">csll</InputLabel>
                                <Select id="csll">
                                    <MenuItem value={"csll-00"}>CSLL 0%</MenuItem>
                                    <MenuItem value={"csll-10"}>CSLL 10%</MenuItem>
                                    <MenuItem value={"csll-nt"}>CSLL NT</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <h3 className="titulo-info-gerais">IRPJ</h3>
                            <FormControl>
                                <InputLabel id="irpj">IRPJ</InputLabel>
                                <Select id="irpj">
                                    <MenuItem value={"irpj-00"}>IRPJ 0%</MenuItem>
                                    <MenuItem value={"irpj-10"}>IRPJ 10%</MenuItem>
                                    <MenuItem value={"irpj-nt"}>IRPJ NT</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <h3 className="titulo-info-gerais">INSS</h3>
                            <FormControl>
                                <InputLabel id="inss">INSS</InputLabel>
                                <Select id="inss">
                                    <MenuItem value={"inss-00"}>INSS 0%</MenuItem>
                                    <MenuItem value={"inss-10"}>INSS 10%</MenuItem>
                                    <MenuItem value={"inss-nt"}>INSS NT</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div>
                        <div>
                            <Button variant="warning">Editar</Button>
                        </div>
                        <div>
                            <Button variant="success">Salvar</Button>
                            <Button variant="danger">Cancelar</Button>
                        </div>

                    </div>

                </form>
                
            </Container>


        </>
    );

}

export default Formulario;
