import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! */}
            <Link to="/">
                <i className="fa fa-user-o"></i> Minha Conta
            </Link>

            <Link to="/">
                <i className="fa fa-file-text-o"></i> Fiscal
            </Link>

            <Link to="/">
                <i className="fa fa-archive"></i> Inventário
            </Link>

            <Link to="/">
                <i className="fa fa-users"></i> Parceiros
            </Link>

            <Link to="/">
                <i className="fa fa-line-chart"></i> Contabilidadde
            </Link>
        </nav>
    </aside>