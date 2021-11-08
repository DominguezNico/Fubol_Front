import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from "history";
import {BrowserRouter as Router, Route,Switch,Redirect} from "react-router-dom";

import Login from './paginas/Login.js';
import Jugador from './componentes/Jugador/inicioJugador.js'




const history = createBrowserHistory();

ReactDOM.render(
  <Router>
    <Login />
  </Router>,
  document.getElementById('root')
);



