import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import Parceiros from '../components/parceiros/parceiros'
import Inventario from '../components/inventario/inventario'
import Fiscal from '../components/fiscal/fiscal'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/parceiros' component={Parceiros} />
        <Route path='/inventario' component={Inventario} />
        <Route path='/fiscal' component={Fiscal} />
        <Redirect from='*' to='/' />
    </Switch>