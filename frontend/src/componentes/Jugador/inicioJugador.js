import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav,Navbar,Container,NavDropdown} from 'react-bootstrap'
import { Switch, Route, Link ,BrowserRouter as Router} from "react-router-dom";

import home from './homeJugador.js';
import avance from './campeonatos/avance.js';
import PageNotFound from '../../paginas/PageNotFound.js';
import tablaPosicones from './campeonatos/tablaPosiciones.js';
import modificarDatos from './Perfil/modificarDatosPersonales.js';
import VerGoles from './Perfil/verGoles.js';
import VerFaltas from './Perfil/verFaltas.js';


function InicioJugador ({usuario}) {


  return(
    <Router>
    <div>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand> <Link to={"/"} className="nav-link"> Jugador </Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Campeonatos" id="basic-nav-dropdown">
            <NavDropdown.Item ><Link to={"/avance"} className="nav-link">Consultar avance del club</Link></NavDropdown.Item>
            <NavDropdown.Item ><Link to={"/tablaPosiciones"} className="nav-link">Ver tabla de posiciones </Link></NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Perfil" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to={{pathname:"/modificarDatos", state:usuario}} className="nav-link">Modificar datos personales </Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={"/verFaltas"} className="nav-link">Ver mis faltas </Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={"/varGoles"} className="nav-link">Ver mis goles</Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>

    <div className="container mt-3">
    
      <Switch>
      <Route exact path="/" component={home} />

        <Route exact path="/avance" component={avance} />
        <Route exact path="/tablaPosiciones" component={tablaPosicones} />
        
        <Route path="/modificarDatos" component={modificarDatos} />
        
        <Route exact path="/verFaltas" render={(props) => (
          <VerFaltas {...props} usuario={usuario}/>
        )}/>

        <Route exact path="/varGoles" render={(props) => (
          <VerGoles {...props} usuario={usuario}/>
        )}/>  

        <Route component={PageNotFound} />
       {/* {hasRole(user,['jugador']) && <Route path='/jugador' component={Jugador}/>} 
        {hasRole(user,['admin']) && <Route path='/admin' component={Admin}/>}
        {hasRole(user,['representante']) && <Route path='/representante' component={Representante}/>}*/}
      </Switch>
    </div>

    </div>
    </Router>
  )
}

export default InicioJugador
