import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav,Navbar,Container,NavDropdown} from 'react-bootstrap'
import { Switch, Route, Link ,BrowserRouter as Router} from "react-router-dom";

import avance from './campeonatos/avance.js';
import PageNotFound from '../../paginas/PageNotFound.js';


function inicioJugador () {
  console.log("llegue")
  return(
    <Router>
    <div>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/home">Jugador</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Campeonatos" id="basic-nav-dropdown">
            <NavDropdown.Item ><Link to={"/avance"} className="nav-link">Consultar avance del club</Link></NavDropdown.Item>
            <NavDropdown.Item href="/tabla">Ver tabla de posiciones</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Perfil" id="basic-nav-dropdown">
            <NavDropdown.Item href="/modificarDatos">Modificar datos personales</NavDropdown.Item>
            <NavDropdown.Item href="/verFaltas">Ver mis faltas</NavDropdown.Item>
            <NavDropdown.Item href="/verGoles">Ver mis goles</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>

    <div className="container mt-3">
    
      <Switch>
        <Route exact path="/avance" component={avance} />
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

export default inicioJugador
