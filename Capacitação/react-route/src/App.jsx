import React from 'react';
import './assets/css/base/base.css';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Pagina404 from './components/Pagina404';
import Cabecalho from './components/Cabecalho';
import Post from './components/Post';
import Categoria from './components/Categoria';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

	return (
		<Router>
			<Cabecalho />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/Sobre'>
					<Sobre />
				</Route>
				<Route path='/categoria/:id'>
					<Categoria />
				</Route>
				<Route path='/posts/:id'>
					<Post />
				</Route>
				<Route>
					<Pagina404 />
				</Route>
			</Switch>
		</Router>
	);
    
}

export default App;