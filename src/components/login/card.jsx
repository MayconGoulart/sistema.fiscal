import React, { Fragment, Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'

import '../login/card.css'

export default class card extends Component {
    render() {
        return (
            <Fragment>
                <div id="card">
                    <div id="card-content">
                        <div id="card-title">
                            <i className="fa fa-user-circle icone" aria-hidden="true"></i>                            
                            <div className="underline-title"></div>
                        </div>
                        <form method="post" className="form">
                            <label htmlFor="user-email">
                                &nbsp;Email
                            </label>
                            <input id="user-email" className="form-content" type="email" name="email" autoComplete="off" required />
                            <div className="form-border"></div>
                            <label htmlFor="user-password" className="password">&nbsp;Senha
                             </label>
                            <input id="user-password" className="form-content" type="password" name="password" required />
                            <div className="form-border"></div>
                        
                            <div className="form-remember"> 
                                <input id="checkbox_remember" type="checkbox" className="checkbox"></input>
                                <label htmlFor="checkbox_remember" id="remember">Lembrar-me</label>
                            </div>
                            <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
                            <a href="#" id="signup">Criar uma conta</a>
                        </form>
                    </div>
                </div>
            </Fragment>

        )
    }
}