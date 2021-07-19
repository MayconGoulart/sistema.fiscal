// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React from 'react';

// IMPORTAÇÃO DOS COMPONENTES
import { Button } from 'react-bootstrap';
import { FormControlLabel, TextField, Select, FormControl, MenuItem, InputLabel } from '@material-ui/core';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './fiscal.css';

function CadastroFiscal() {

    return (
        <>

            <section className="infos-card">
                
                <form>
                    
                    <div className="info-inicial">

                        <h2 className="titulo-info-gerais">"Tipo Documento" : "Número (APÓS CONFIRMAÇÃO)</h2>

                    </div>

                    <div className="info-gerais">
                        
                        <div>
                            <FormControl>
                                <InputLabel id="operacao-fiscal">Operação</InputLabel>
                                <Select id="operaca-fiscal">
                                    <MenuItem value={"venda"}>Venda</MenuItem>
                                    <MenuItem value={"bonificacao"}>Bonificação</MenuItem>
                                    <MenuItem value={"devolucao-venda"}>Devolução de Venda</MenuItem>
                                    <MenuItem value={"compra"}>Compra</MenuItem>
                                    <MenuItem value={"devolucao-compra"}>Devolução de Compra</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl>
                                <InputLabel id="finalidade">Finalidade</InputLabel>
                                <Select id="finalidade">
                                    <MenuItem value={"normal"}>Normal</MenuItem>
                                    <MenuItem value={"complementar"}>Complementar</MenuItem>
                                    <MenuItem value={"ajuste"}>Ajuste</MenuItem>
                                    <MenuItem value={"devolucao-mercadoria"}>Devolução Mercadoria</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl>
                                <InputLabel id="consumidor-final">Consumidor Final</InputLabel>
                                <Select id="consumidor-final">
                                    <MenuItem value={"0"}>Não</MenuItem>
                                    <MenuItem value={"1"}>Sim</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl>
                                <InputLabel id="presenca-comprador">Presença do Comprador</InputLabel>
                                <Select id="presenca-comprador">
                                    <MenuItem value={"nao"}>Não se Aplica</MenuItem>
                                    <MenuItem value={"operacao-presencial"}>Operação Presencial</MenuItem>
                                    <MenuItem value={"nao-presencial-internet"}>Não Presencial - Internet</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl>
                                <InputLabel id="tipo-documento">Tipo do Documento</InputLabel>
                                <Select id="tipo-documento">
                                    <MenuItem value={"1"}>01 - Nota Fiscal</MenuItem>
                                    <MenuItem value={"2"}>02 - Nota Fiscal de Venda a COnsumidor</MenuItem>
                                    <MenuItem value={"55"}>55 - Nota Fiscal Eletrônica - NF-e</MenuItem>
                                    <MenuItem value={"se"}>SE - Nota Fiscal de Serviço Eletrônica - NFS-e</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <TextField label="Chave" />
                        </div>

                        <div>
                            <FormControl>
                                <InputLabel id="serie-documento">Série do Documento</InputLabel>
                                <Select id="serie-documento">
                                    <MenuItem value={"1"}>Série 1</MenuItem>
                                    <MenuItem value={"2"}>Série 2</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                    </div>

                    <div className="info-gerais">
                        <h2 className="titulo-info-gerais">Companhia</h2>

                        <TextField label="Nome Legal da Empresa " />
                        <TextField label="Nome da Empresa" />
                        <TextField label="CNPJ" />
                        <TextField label="Inscrição Estadual" />
                        <TextField label="Inscrição Municipal" />
                        <TextField label="Quadro Fiscal" />
                        <TextField label="Cidade" />
                        <TextField label="Distrito" />
                        <TextField label="Rua" />
                        <TextField label="Número" />
                        <TextField label="Estado" />
                        <TextField label="País" />
                        <TextField label="CEP" />

                    </div>

                    <div className="info-gerais">
                        <h2 className="titulo-info-gerais">Comprador</h2>

                        <div>
                            <FormControl>
                                <InputLabel id="parceiro-fisico-juridico">Parceiro</InputLabel>
                                <Select id="parceiro-fisico-juridico">
                                    <MenuItem value={"1"}>Parceiro Físico 1</MenuItem>
                                    <MenuItem value={"2"}>Parceiro Jurídico 2</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <TextField label="Nome Legal da Empresa " />
                        <TextField label="Nome da Empresa" />
                        <TextField label="CNPJ" />
                        <TextField label="Inscrição Estadual" />
                        <TextField label="Inscrição Municipal" />
                        <TextField label="Quadro Fiscal" />
                        <TextField label="Cidade" />
                        <TextField label="Distrito" />
                        <TextField label="Rua" />
                        <TextField label="Número" />
                        <TextField label="Estado" />
                        <TextField label="País" />
                        <TextField label="CEP" />

                    </div>

                    <div className="info-gerais">
                        <h2 className="titulo-info-gerais">Produtos e Serviços</h2>

                    </div>

                    <div className="info-gerais">
                        <h2 className="titulo-info-gerais">Totais</h2>

                        <h3>ICMS</h3>
                        <TextField label="ICMS Base" />
                        <TextField label="ICMS Value" />
                        <TextField label="ICMSSN Value" />

                        <h3>ICMS ST</h3>
                        <TextField label="ICMS ST Base" />
                        <TextField label="ICMS ST Value" />

                        <h3>IPI</h3>
                        <TextField label="IPI Base" />
                        <TextField label="IPI Value" />

                        <h3>ISSQN</h3>
                        <TextField label="ISSQN Base" />
                        <TextField label="ISSQN Value" />
                        <TextField label="ISSQN Ret Base" />
                        <TextField label="ISSQN Ret Value" />

                        <h3>PIS</h3>
                        <TextField label="PIS Base" />
                        <TextField label="PIS Value" />
                        <TextField label="PIS Ret Base" />
                        <TextField label="PIS Ret Value" />

                        <h3>COFINS</h3>
                        <TextField label="COFINS Base" />
                        <TextField label="COFINS Value" />
                        <TextField label="COFINS Ret Base" />
                        <TextField label="COFINS Ret Value" />

                        <h3>CSLL</h3>
                        <TextField label="CSLL Base" />
                        <TextField label="CSLL Value" />
                        <TextField label="CSLL Ret Base" />
                        <TextField label="CSLL Ret Value" />

                        <h3>IRPJ</h3>
                        <TextField label="IRPJ Base" />
                        <TextField label="IRPJ Value" />
                        <TextField label="IRPJ Ret Base" />
                        <TextField label="IRPJ Ret Value" />

                        <h3>INSS</h3>
                        <TextField label="INSS Base" />
                        <TextField label="INSS Value" />
                        <TextField label="INSS Ret Base" />
                        <TextField label="INSS Ret Value" />

                        <h3>Montante</h3>
                        <TextField label="Quantidade Bruta" />
                        <TextField label="Valor do Desconto" />
                        <TextField label="Valor do Seguro" />
                        <TextField label="Valor do Frete" />
                        <TextField label="Outros Custos" />
                        <TextField label="Imposto" />
                        <TextField label="Total" />

                    </div>

                    <div>
                        <Button variant="success">Salvar</Button>
                        <Button variant="danger">Cancelar</Button>
                    </div>

                </form>
                
            </section>


        </>
    );

}

export default CadastroFiscal;
