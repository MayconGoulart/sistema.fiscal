import './Header.css'
import React from 'react'

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> Olá, {props.title}
        </h1>
        <p className="text-muted">{props.subtitle}</p>
    </header>