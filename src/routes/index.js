import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router'
import Home from '../components/AcercaDeNosotros'
import Hello from '../components/ParaEmpresas'
import NoMatch from '../components/NoMatch'
import NavBar from '../components/NavBar'

import { createBrowserHistory } from 'history'
import Para_Empresas from '../components/ParaEmpresas';
import Acerca_de_nosotros from '../components/AcercaDeNosotros';
import Accesos_de_interes from '../components/AccesosDeInteres';
import Normativa from '../components/Normativa';

const history = createBrowserHistory()

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Acerca_de_nosotros} />
                        <Route path="/para_empresas" component={Para_Empresas} />
                        <Route path="/accesos_de_interes" component={Accesos_de_interes} />
                        <Route path="/normativa" component={Normativa} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router>
        )
    }

}
export default Routes;
