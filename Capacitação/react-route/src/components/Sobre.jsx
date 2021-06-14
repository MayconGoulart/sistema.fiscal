import React from 'react';

import '../assets/css/components/cartao.css';

function Sobre() {

    return (
        <main>
            <div className="container">
                <h2 className="titulo-pagina">Sobre Doguito</h2>
            </div>
            <section className="container flex flex--centro">
                <article className="cartao">
                    O blog do Doguito foi criado para tirar diversas dúvidas sobre o mundo pet!!!
                </article>
            </section>
        </main>
    )
}

export default Sobre;