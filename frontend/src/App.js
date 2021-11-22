import React from "react";
import {BrowserRouter as Router,Route,Switch,Link,Redirect,render} from "react-router-dom";
import { Navbar,Container,Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {hasRole,isAllowed} from './auth';

import { browserHistory } from 'react-router';

import Home from './paginas/Home'
import Login from './paginas/Login.js'
import Registro from './paginas/registro.js'
import PageNotFound from './paginas/PageNotFound'
import Jugador from './componentes/Jugador/inicioJugador'
import Admin from './componentes/Admin/inicioAdmin'
import Representante from './componentes/Representante/inicioRepr'

import ClubComponent from "./componentes/ClubComponent";
import { useHistory } from "react-router-dom";



function App() {
  
  return (
    <>
    <Router>
    <Switch>
			<Route exact path="/Registro" component={Registro} />
      <Route component={Login} />
	  	</Switch>
	  </Router>
    </>
  );
}

export default App;
