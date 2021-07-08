// IMPORTAÇÃO COMPONENTES REACT
import React from 'react';

// IMPORTAÇÃO DOS COMPONENTES
import imagem from './page404.png';

// IMPORTAÇÃO DOS ESTILOS
import 'bootstrap/dist/css/bootstrap.min.css';
import './principal.css';

function Page404() {

    return(

        <main>
            <img src={imagem} alt='Página Não Encontrada'/>
        </main>

    );

}

export default Page404;