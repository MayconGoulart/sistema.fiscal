// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React from 'react';

// IMPORTAÇÃO DOS COMPONENTES
import { Checkbox, FormControlLabel, FormGroup, Select, FormControl, MenuItem, InputLabel } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
import StoreIcon from '@material-ui/icons/Store';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './inventario.css';

function CadastroInventario() {

    return (
        <>

            <Container className="md container-generico">
                
                <form>

                    <div>
                        <StoreIcon style={{ fontSize: 50 }} />
                        <TextField id="nome" label="Nome" />
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Pode ser vendido"/>
                            <FormControlLabel control={<Checkbox />} label="Pode ser comprado"/>
                        </FormGroup>

                    </div>

                    <div>
                        <h2>Informações Gerais</h2>
                        <FormControl>
                            <Select>
                                <MenuItem value={1}>Produto</MenuItem>
                                <MenuItem value={2}>Serviço</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField id="categoria" label="Categoria" />
                        <TextField id="referencia" label="Referência" />
                        <TextField id="barcode" label="Código de Barras" />
                        <FormControl>
                            <Select>
                                <MenuItem value={1}>15%</MenuItem>
                                <MenuItem value={1}>20%</MenuItem>
                                <MenuItem value={1}>30%</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField id="preco" label="Preço de Venda" />
                        <TextField id="custo" label="Taxa do Cliente" />
                        <TextField id="fornecedor" label="Fornecedor" />
                    </div>

                    <div>
                        <h2>Informações Fiscais</h2>
                        <FormControl>
                            <InputLabel>Tipo Fiscal</InputLabel>
                            <Select>
                                <MenuItem value={0}>Mercadoria para Revenda</MenuItem>
                                <MenuItem value={1}>Matéria-prima</MenuItem>
                                <MenuItem value={2}>Embalagem</MenuItem>
                                <MenuItem value={3}>Produto em Processo</MenuItem>
                                <MenuItem value={4}>Produto Acabado</MenuItem>
                                <MenuItem value={5}>Subproduto</MenuItem>
                                <MenuItem value={6}>Produto Intermediário</MenuItem>
                                <MenuItem value={7}>MAterial de Uso e Consumo</MenuItem>
                                <MenuItem value={8}>Ativo Imobilizado</MenuItem>
                                <MenuItem value={9}>Serviços</MenuItem>
                                <MenuItem value={10}>Outros Insumos</MenuItem>
                                <MenuItem value={11}>Outras</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>ICMS de Origem</InputLabel>
                            <Select>
                                <MenuItem value={0}>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8</MenuItem>
                                <MenuItem value={1}>1 - Estrangeira - Importação direta, exceto a indicada no código 6</MenuItem>
                                <MenuItem value={2}>2 - Estrangeira - Adquirida no mercado interno, exceto a indicado no código 7</MenuItem>
                                <MenuItem value={3}>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%</MenuItem>
                                <MenuItem value={4}>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes</MenuItem>
                                <MenuItem value={5}>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%</MenuItem>
                                <MenuItem value={6}>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural</MenuItem>
                                <MenuItem value={7}>7 - Estrangeira - Adquirida no mercado interno, sem similar, nacional, constante lista CAMEX e gás natural</MenuItem>
                                <MenuItem value={8}>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>NCM</InputLabel>
                            <Select>
                                <MenuItem value={1}>0000.00.00</MenuItem>
                                <MenuItem value={2}>Necessário Preencher - Disponibilizado pelo MF</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>ICMS ou ISSQN</InputLabel>
                            <Select>
                                <MenuItem value={0}>ICMS</MenuItem>
                                <MenuItem value={1}>ISSQN</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>Gênero Fiscal</InputLabel>
                            <Select>
                                <MenuItem value={0}>Serviço</MenuItem>
                                <MenuItem value={1}>Animais Vivos</MenuItem>
                                <MenuItem value={2}>Carnes e miudezas, comestíveis</MenuItem>
                                <MenuItem value={3}>Peixes e crusstáceos, moluscos e os outros invertebrados aquáticos</MenuItem>
                                <MenuItem value={4}>Leite e laticínios; mel natural; produtos comestíveis de origem animal, não especificados nem compreendidos em outros Capítulos do TIPI</MenuItem>
                                <MenuItem value={5}>Inserir Mais com o Tempo</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>CEST</InputLabel>
                            <Select>
                                <MenuItem value={1}>Necessário Preencher - Disponibilizado pelo MF</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>NBM</InputLabel>
                            <Select>
                                <MenuItem value={1}>Necessário Preencher - Disponibilizado pelo MF</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>NBS (Quando Tipo Fiscal for Serviço)</InputLabel>
                            <Select>
                                <MenuItem value={1}>Necessário Preencher - Disponibilizado pelo MF</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>Tipo de Serviço - LC 166 (Quanto Tipo Fiscal for Serviço)</InputLabel>
                            <Select>
                                <MenuItem value={1}>Necessário Preencher - Disponibilizado pelo MF</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField id="deducoes" label="Deduções Fiscais" />
                        <TextField id="unidade" label="Unidade" />
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

export default CadastroInventario;