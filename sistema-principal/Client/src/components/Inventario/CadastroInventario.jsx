// IMPORTAÇÃO DOS MÓDULOS DO REACT
import React from 'react';

// IMPORTAÇÃO DOS COMPONENTES
import { Checkbox, FormControlLabel, FormGroup, Select, FormControl, MenuItem, InputLabel } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
import StoreIcon from '@material-ui/icons/Store';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './inventario.css';

function CadastroInventario() {

    return (
        <>

            <section class="infos-card"> 
                
                <form>

                    <div class="info-inicial">
                        <div class="icon-inicial">
                            <StoreIcon style={{ fontSize: 80 }} />
                        </div>
                        
                        <div>
                            <TextField id="nome" label="Nome" />
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Pode ser vendido"/>
                                <FormControlLabel control={<Checkbox />} label="Pode ser comprado"/>
                            </FormGroup>
                        </div>

                    </div>

                    <div class="info-gerais">
                        <h2>Informações Gerais</h2>
                        <div class="info-gerais-conteudo">
                        <div class="info-gerais-1">
                            <FormControl>
                                <Select>
                                    <MenuItem value={1}>Produto</MenuItem>
                                    <MenuItem value={2}>Serviço</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField id="categoria" label="Categoria" />
                            <TextField id="referencia" label="Referência" />
                            <TextField id="barcode" label="Código de Barras" />
                        </div>
                        <div class="info-gerais-2">
                            <FormControl>
                                <Select>
                                    <MenuItem value={0}>00%</MenuItem>
                                    <MenuItem value={1}>10%</MenuItem>
                                    <MenuItem value={2}>20%</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField id="preco" label="Preço de Venda" />
                            <TextField id="custo" label="Custo de Compra" />
                            <TextField id="fornecedor" label="Fornecedor" />
                        </div>
                        </div>
                    </div>

                    <div class="info-gerais">
                        <h2>Informações Fiscais</h2>
                        <div class="info-gerais-conteudo">
                            <div class="info-gerais-1">
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
                                <MenuItem value={1}>0000.00.00 - Sem NCM</MenuItem>
                                <MenuItem value={2}>7200.00.00 - Ferro fundido, ferro e aço</MenuItem>
                                <MenuItem value={3}>8100.00.00 - Outros metais comuns; cermets; obras desses materiais</MenuItem>
                                <MenuItem value={4}>8300.00.00 - Obras diversas de metais comuns</MenuItem>
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
                                <MenuItem value={0}>00 - Serviço</MenuItem>
                                <MenuItem value={1}>70 - Vidros e suas obras</MenuItem>
                                <MenuItem value={2}>72 - Ferro fundido, ferro e aço</MenuItem>
                                <MenuItem value={3}>83 - Obras diversas de metais comuns</MenuItem>
                            </Select>
                        </FormControl>

                        </div>
                            <div class="info-gerais-2">
                            <FormControl>
                            <InputLabel>CEST</InputLabel>
                            <Select>
                                <MenuItem value={1}>01.004.00 - Reservatórios de óleo</MenuItem>
                                <MenuItem value={2}>01.016.00 - Espelhos retrovisores</MenuItem>
                                <MenuItem value={3}>01.017.00 - Lentes de faróis, lanternas e outros utensílios</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>NBM</InputLabel>
                            <Select>
                                <MenuItem value={1}>4016.10.10 - Partes de veículos automóveis, tratores e máquinas autopropulsadas</MenuItem>
                                <MenuItem value={2}>8408.20.00 - Motores dos tipos utilizados para propulsão de veículos automotores</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>NBS (Quando Tipo Fiscal for Serviço)</InputLabel>
                            <Select>
                                <MenuItem value={1}>1.2001.3 - Serviços de manutenção e reparação de máquiário e equipamentos de transporte</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>Tipo de Serviço - LC 116 (Quanto Tipo Fiscal for Serviço)</InputLabel>
                            <Select>
                                <MenuItem value={1}>14.01 - Lubrificação, limpeza, lustração (...)</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField id="deducoes" label="Deduções Fiscais" />
                        <TextField id="unidade" label="Unidade" />

                    </div>
                    </div> 
                    </div>

                    <div class="btn-salvar">
                        <Button variant="success">Salvar</Button>
                        <Button variant="danger">Cancelar</Button>
                    </div>

                </form>
                
            </section>


        </>
    );

}

export default CadastroInventario;
