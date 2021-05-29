import React from 'react'
import Main from '../template/Main'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'

export default props =>
    <Main icon="user-circle" title="Emerson"
        subtitle="Sair">
        <div className="row background">
            <div className="column text-center">
                <div id="card">
                    <div id="card-content">
                        <div id="card-title">
                            <i className="fa fa-user-circle icone" aria-hidden="true"></i>
                            <div className="underline-title">Fiscal</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="column">
                <div id="card">
                    <div id="card-content">
                        <div id="card-title">
                            <i className="fa fa-archive icone" aria-hidden="true"></i>
                            <div className="underline-title margem_4">Inventário</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="column">
                <div id="card">
                    <div id="card-content">
                        <div id="card-title">
                            <i className="fa fa-users icone" aria-hidden="true"></i>
                            <div className="underline-title">Parceiros</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="column ">
                <div id="card">
                    <div id="card-content">
                        <div id="card-title">
                            <i className="fa fa-line-chart icone" aria-hidden="true"></i>
                            <div className="underline-title margem_2">Contabilidade</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </Main>