import React from 'react'
import Main from '../template/Main'

import 'bootstrap/dist/css/bootstrap.min.css'
import './parceiros.css'

export default props =>
    <Main icon="user-circle" title="Emerson"
        subtitle="Sair">
        <div id="card-parceiros">
            <div id="title" className="row">
               {/* <h2 className="col-md-12">Cadastro de Parceiros</h2>  */}
                     <div className="htmlForm-check col-md-2">
                        <input className="htmlForm-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                        <label className="htmlForm-check-label margem-label" htmlFor="flexRadioDefault1">
                           Pessoa         
                        </label>
                    </div>

                    <div className="htmlForm-check col-md-3 margem">
                        <input className="htmlForm-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
                        <label className="htmlForm-check-label margem-label" htmlFor="flexRadioDefault2">
                           Empresa
                        </label>
                    </div> 
            </div>
            <div id="card-content">

            </div>
        </div>
    </Main>