import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'


export default props =>
    <aside className="menu-area">
        <nav className="menu">

            <Link to="/">
                <i className="fa fa-home"></i> Home
            </Link>

            <Link to="/conta">
                <i className="fa fa-user-o"></i> Minha Conta
            </Link>

            <Link to="/fiscal">
                <i className="fa fa-file-text-o"></i> Fiscal
            </Link>

            <Link to="/inventario">
                <i className="fa fa-archive"></i> Inventário
            </Link>

            <Link to="/parceiros" >
                <i className="fa fa-users"></i> Parceiros
            </Link>

            <Link to="/">
                <i className="fa fa-line-chart"></i> Contabilidade
            </Link>
        </nav>
    </aside>